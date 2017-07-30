import url from '../models/url';


const listUrl = () => {

    return url
        .find({})
        .then(listUrl => {
            console.log("URLs: ", listUrl);
            return listUrl;
        })
        .catch(err => {
            return Promise.reject(err);
        })
}


const addUrl = (pretty, long) => {

    console.log("Pretty: ", pretty, " Long: ", long)
    return url
        .findOne({
            prettyUrl: pretty
        })
        .then(urladd => {
            if (urladd === null) {
                var shortUrl = 'http://localhost:3000/api/v1/url/' + pretty;
                console.log("Here are ur values for short: ", shortUrl, " long: ", long);

                var newUrl = url({
                    prettyUrl: shortUrl,
                    longUrl: long
                });
                console.log(newUrl);


                newUrl
                    .save()
                    .then(urlAdded => {
                        console.log('Adding a new tvShow');
                        return urlAdded;
                    })
                    .catch(err => {
                        console.log("Error adding a new tvshow: ", err);
                        return 'Something went wrong';
                    });
            }
            else {

                console.log("url: ", url);
            }
            // if(!url){
            //     var shortUrl = 'http://localhost:3000/url/'+pretty;
            //     var newUrl = new url({
            //         prettyUrl: shortUrl,
            //         longUrl: longUrl
            //     });
            //     return newUrl;
            // }
            // else{
            //     return url;
            // }
        })
        .catch(err => {
            return Promise.reject(err);
        })

}


const getUrl = (pretty) => {
    return url
        .findOne({prettyUrl: 'http://localhost:3000/api/v1/url/'+pretty})
        .then(found => {
           // console.log(found);
            return found;
        })
        .catch(err => {
            return Promise.reject(err);
        })
}








module.exports = {
    listUrl,
    getUrl,
    addUrl
}