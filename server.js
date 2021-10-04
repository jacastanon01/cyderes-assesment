const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/domains', (req, res) => {
    const domains = [
        {id: 0, domainName: "DomainTools.com", created: "1998-08-02", expires: "2027-08-01"},
        {id: 1, domainName: "DailyChanges.com", created: "2002-02-17", expires: "2027-02-17"},
        {id: 2, domainName: "ReverseWhois.com", created: "2000-02-10", expires: "2027-02-10"}
    ]
    //const URL = 'https://api.domaintools.com/v1/domaintools.com/whois/'
    res.json(domains);
    console.log(req.body);
})

const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));