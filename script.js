let mainButton = document.querySelector('.main-button');
let messageArea = document.querySelector('.message-area');
let mainInput = document.querySelector('.main-input');
let messageInputText = document.querySelector('.message-text-inner');
let mainUsername = document.querySelector('.main-username');



mainButton.addEventListener('click', ()=>{
	console.log('Click');
	
	let textChat = mainInput.value;
	let textUser = mainUsername.value;
	mainInput.value = '';
	let object = {
		"userMessage": `${textChat}`,
		"userName": `${textUser}`
	}
	//request = true;
	//console.log(`OBJECT  ${object.userMessage} ${object.userName}`);
	
		fetch('http://192.168.120.19:3030/messages',  {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(object)
	})
	.then(response => response.json())
  .then(data => {
		
	})
	
	
	
});

mainInput.addEventListener('keypress', (e)=>{
	if(e.keyCode == 13){
		mainButton.click()
	}
})

const getData = (n) =>{
	messageInputText.innerHTML = '';
	let strangeData = [];
	for(let i=0; i<=n[0].mess.length-1;i++){
		let a = new Date() 
		let str = `<p><b>${n[1].users[i]}</b></p><p>${n[0].mess[i]}</p><hr>`;
		strangeData.push(str);
	}
	// console.log('N DATA');
	// console.log(n[0].mess);
	// console.log(n[1].users);

	strangeData.forEach(element => {
		messageInputText.innerHTML += element;
	});
}



	setInterval(()=>{
	
			fetch('http://192.168.120.19:3030/messages')
			.then(response => response.json())
			.then(data => {
				
				getData(data);
				
			})
			.catch(console.log(''));
	
}, 1000);


	