const name=document.getElementsById('name')
const name=document.getElementsById('email')
const form=document.getElementsById('form')

form.addEventListener('submit',(e)=>
{
	let message=[]
	if(name.value==='' || name.value==null)
	{
		message.push('Please enter the name')
	}
	if(message.lenght>0)
	{
		e.preventDefault()
		errorELement.innerText=message.join(',')
	}
	alertMessage('submitted')
})