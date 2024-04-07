// const express = require('express')
// const app = express()
// const bodyParser=require('body-parser')


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json())
// //יצירת מאזין
// app.listen('3002', () => {
//     console.log('my port working');
// })
// app.get('', (req, res) => {
//        curl --request GET \
//      --url 'https://api.render.com/v1/services?limit=20' \
//      --header 'accept: application/json' \
//      --header 'authorization: Bearer rnd_2DdcZPyACrDe1XgqN0WgoK5jpMSX'
//     res.status(200).send('my sites')
// })
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://api.render.com/v1/services?limit=20', {
            headers: {
                'accept': 'application/json',
                // הוסף את ה-API key שלך במקום הנקודות
                'authorization': 'Bearer rnd_2DdcZPyACrDe1XgqN0WgoK5jpMSX'
            }
        });
        // כאן אתה יכול להשתמש ב-response.data כדי לעשות משהו עם הנתונים שהתקבלו
        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data from Render API');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
