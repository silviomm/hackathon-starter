module.exports = function(app){
    
    app.route('/welcome')
        .get((req, res) => {
            console.log('welcome from the server!');
            res.status(200).json('Welcome!');
        });

}