const Joi = require('joi');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


//app.use(express.json());


app.use(bodyParser.json())
app.use(cors());

/*
let courses = [
	{id: 1, name: 'course1'},
	{id: 2, name: 'course2'},
	{id: 3, name: 'course3'},
	{id: 4, name: 'course4'},
];

app.get('/', (req, res)=>{
	res.send('Hello ИГАРЬ');
});

app.get('/courses', (req, res)=>{
	res.send(courses);
});

app.post('/courses', (req, res)=>{
	const { error } = validateCourse(req.body);
	
	if(error){
		return res.status(400).send(result.error.details[0].message);
	}

	const course = {
		id: courses.length + 1,
		name: req.body.name
	};

	courses.push(course);
	res.send(courses)
});

app.put('/courses/:id', (req, res)=>{
	let cour = courses.find( c => c.id === parseInt(req.params.id));
	if (!cour){
		return res.status(404).send('This course doesnt exist');
	}

	const { error } = validateCourse(req.body);
	
	if(error){
		return res.status(400).send(error.details[0].message);
	}

	courses[parseInt(req.params.id)-1].name = req.body.name;
	res.send(courses[parseInt(req.params.id)-1]);


});

const validateCourse = (course) =>{
	const schema = {
		name: Joi.string().min(3).required()
	};

	return Joi.validate(course, schema);

}


app.delete('/courses/:id', (req, res)=>{
	let cour = courses.find( c => c.id === parseInt(req.params.id));
	if (!cour){
		return res.status(404).send('This course doesnt exist');
	}

	const index = courses.indexOf(cour);

	courses.splice(index, 1);
	res.send(cour)
});




app.get('/courses/:id', (req, res)=>{
	let cour = courses.find( c => c.id === parseInt(req.params.id));
	if (!cour){
		res.status(404).send('This course doesnt exist');
	}
	else{
		res.send(cour);
	}
});
*/
let arr = {
	mess: [
		'Hello World'],
};

let names = {
	users:[
		'Username'],
}


app.post('/messages', (req, res) =>{
	console.log(req.body.userMessage);
	console.log(req.body.userName);

	res.send(req.body);

	arr.mess.push(req.body.userMessage);
	names.users.push(req.body.userName);
	console.log('Inner in req ' + req.body)
	//console.log(arr)
});

app.get('/messages', (req, res)=>{
	res.json([arr, names]);

	if(arr.mess.length > 50){
		for(let i=0; i<10;i++){
			arr.mess.shift();
			names.users.shift();
		}
	}

});

app.get('/', (req, res)=>{
	res.send(`<a href="http://192.168.43.34:5500/index.html">GO TO CHAT!</a>`)
});




// setInterval(()=>{
	

// }, 30000);

const port = process.env.PORT || 3030;

app.listen(port, ()=> console.log(`Routing om port ${port}`))