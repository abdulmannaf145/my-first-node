const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

app.get('/',(req,res)=>{
    res.send('hello from my first ever node javaScript hello mannaf');
})


const users = [
    {
        id:1,
        name:'abdulmannaf',
        age: 20
    },
    {
        id:2,
        name:'abdulmomin',
        age: 20
    },
    {
        id:3,
        name:'abu bakker',
        age: 20
    },
    {
        id:4,
        name:'shihab',
        age: 20
    },
]

app.get('/users',(req,res)=>{
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else{
        res.send(users);
    }
})


app.post('/users',(req,res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post',req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})




app.get('/furits/mangoes/fazli',(req,res)=>{
    res.send('this is a furites page')
});
app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})





app.listen(port,()=>{
    console.log('listening to port ',port);
})