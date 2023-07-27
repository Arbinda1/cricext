async function getMatchData() {

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=f056a12b-2a9e-42fd-91e9-9e2524095a69&offset=0")
        .then(data => data.json())
        .then(data => {
            if (data.status != "success")return;

            const matchesList = data.data;

            if(!matchesList)return [];
            
            //add your api key from cricketdata.org

            const relevantData = matchesList.filter(match => match.series_id).map(match => `${match.name}, ${match.status}`);

            console.log({relevantData});

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match} </li>`).join('');

            return relevantData;

        })
        .catch(e => console.log(e));
}

getMatchData();