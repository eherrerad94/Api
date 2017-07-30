import urlCtrl from '../controllers/url';
import express from 'express';
const app = express.Router();

app.group('/url', (router) => {
    router
        .get('/', (req, res) => {
            urlCtrl
                .listUrl()
                .then(urlList => {
                    console.log("urlList:", urlList)
                    res
                        .status(200)
                        .json({
                            urlList: urlList,
                            length: urlList.length,
                            message: 'Ok' 
                        })
                })
                .catch(err => {
                    console.log("Err:", err)
                    res.status(200).send(err)
                })
        })
        .get('/:id', (req, res) => {
            const pretty = req.params.id;
            urlCtrl
                .getUrl(pretty)
                .then(url => {
                    console.log(url);
                        res
                        .redirect(url.longUrl);
                        //  .status(200)
                        // .json({ urlFound: url})
                })
                .catch(err => {
                    console.log("Err ", err)
                    res.status(200).send(err);
                })
        })
        .post('/', (req, res) => {
           
            console.log('pOST',req.body);
            urlCtrl
                .addUrl(req.body.prettyUrl,req.body.longUrl)
                .then(url => {
                    console.log(url);
                       res
                        .status(201)
                        .json({ url: url })
                })
                .catch(err => {
                    console.log("Err ", err)
                    res.status(200).send(err)
                
                })
        })
 
})





module.exports = app;
