const login = (req,res) => {
    console.log("login user");
    res.send('request over')
}

const signup = (req,res) => {
    console.log("signup");
    res.send('request over');
}

const logout = (req,res) => {
    console.log("logout");
    res.send('request over');
}

module.exports = {login,signup,logout};