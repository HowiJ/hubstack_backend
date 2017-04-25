module.exports = (app) => {
    // This route is just for the default welcome page.
    app.get('/', (req, res) => {
        // Default Welcome Message.
        res.send('<h1>Hey there!</h1><h3>Project: hubstack_backend</h3><h4>A few things to know....</h4><ul><li>Your server is up and running...</li><li>Routes are restful and set up...</li><li>Controllers are set up per model...</li></ul><p><i>Made by Howard Jiang (github.com/HowiJ/node_gen_bash)</i></p>');
    });
};
