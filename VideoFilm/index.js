const Joi = require('joi'),
						express = require('express'),
						app = express();

app.use(express.json());

let movies = [
				{
					genre: 'comedy',
					name: 'NameComedy1',
					collection: 'films',
					id: 1
				},
				{
					genre: 'comedy',
					name: 'NameComedy2',
					collection: 'films',
					id: 2
				},
				{
					genre: 'comedy',
					name: 'NameComedy3',
					collection: 'films',
					id: 3
				},
				{
					genre: 'comedy',
					name: 'NameComedy4',
					collection: 'films',
					id: 4
				},
				{
					genre: 'triller',
					name: 'NameTriller1',
					collection: 'films',
					id: 1
				},
				{
					genre: 'triller',
					name: 'NameTriller2',
					collection: 'films',
					id: 2
				},
				{
					genre: 'horror',
					name: 'NameHorror1',
					collection: 'films',
					id: 1
				},
				{
					genre: 'horror',
					name: 'NameHorror2',
					collection: 'films',
					id: 2
				},
];

app.get('/', (req, res)=>{
			res.send('Welcome to our site VideoFilm.com')	
});

app.get('/movies', (req, res)=>{
				res.send(movies);
});

app.put('/movies/:genre/:id', (req, res)=>{
			let film = movies.find( item => 
															item.genre === `${req.params.genre}` &&
                          		item.id === parseInt(req.params.id)
															);
				
		if(!film){
			return res.status(404).send(`This is film doesn't exists`);
		}
		const {error} = validateRequest(req.body);
		if(error){
			return res.status(400).send(error.details[0].message);
  	}
		
		
		movies.forEach(item =>{
			if(item.genre === req.params.genre && item.id === parseInt(req.params.id)){
				item.name = req.body.name;
				res.send(item);
			}
		});	
});

const validateRequest = (req) =>{
				const example = {
								name: Joi.string().min(2).required()
				};
				
				return Joi.validate(req, example);
}

app.get('/movies/:genre', (req, res)=>{
	let film = movies.find(item => item.genre === req.params.genre);

	if(!film){
		res.status(404).send(`This genre doesn't exist`);
	}
	else{
		let result = movies.filter(item =>{
			if(item.genre === req.params.genre){
				return item;
			}
		});

		res.send(result)
	}
});

app.get('/movies/:genre/:id', (req, res)=>{
	let film = movies.find(item => item.genre === req.params.genre &&
																 item.id === parseInt(req.params.id));
		if(!film){
			return res.status(404).send(`This film doesn't exist`)
		}
		else{
			let result = movies.filter(item =>{
				if(item.id === parseInt(req.params.id) && item.genre === req.params.genre){
					return item;
				}
			});
			res.send(result);
		}
});

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`Routing on port ${port}`));

