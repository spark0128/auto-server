export default (app) => {
    // app.get('/v1/login', async (req, res) => {

    // });
    // app.get('/v1/signup', async (req, res) => {

    // });
    app.post('v1/login', async (req, res) => {
        console.log(req.body);
        res.redirect('/');
    });
    app.post('v1/signup', async (req, res) => {
        console.log(req.body);
        res.redirect('/');
    });
}