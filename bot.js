const Discord = require('discord.js');
const client = new Discord.Client();

Client = Discord.Client

client.on('ready', () => {
	console.log('AppleBot Start.')
	console.log('AppleBot Client Started.')
	client.user.setActivity('사과야 도움말을 입력하여 도움말을 확인하세요.', { type: 'PLAYING' })
	console.log('setActivity Successfully Executed.')
	console.log('loggined as ${client.user.tag}');
	
});

client.on('message', msg => {
	if (msg.content === '사과야 Apple6050') {
		msg.reply('제 주인입니다!')
		console.log('Apple6050 Command Executed.');
	}
	
	if (msg.content === '사과야 sia_777') {
		msg.reply('시아님입니다!')
		console.log('Sia_777 Command Executed.');
	}
	
	if (msg.content === '사과야') {
		msg.reply('네?')
		console.log('AppleBot Main Command Executed.');
	}
	
	if (msg.content === '사과야 도움말') {
		msg.reply('사과야 코드,사과야 바보,사과야 너는 어디에서 왔니?,사과야 도움말,사과야,사과야 크시,사과야 Apple6050,사과야 sia_777 등의 명령어가 있습니다.')
		console.log('AppleBot Help Command Executed.'); //헬프 커맨드 콘솔 로그
	}
	
	if (msg.content === '사과야 너는 어디에서 왔니?') {
		msg.reply('저는 Apple6050의 컴퓨터 코딩 프로그램으로부터 왔어요!')
		console.log('Apple6050Coding Command Executed.'); //코딩 커맨드 콘솔 로그
	}
	
	if (msg.content === '사과야 바보') {
		msg.reply('그렇게 말하시면... 슬퍼요... 흑흑...')
		console.log('AppleBot Babo Command Executed.'); //바보 커맨드 콘솔 로그
	}
	
	if (msg.content === '사과야 코드') {
		msg.reply('이 봇 오픈소스 아님 ㅅㄱ')
		console.log('AppleBot Code Command Executed.'); //오픈소스 아님 ㅅㄱ
	}
	
	if (msg.content === '사과야 APP LEE') {
		msg.reply('APP LEE is strange person.')
		console.log('Apple6050 917L Command Executed.'); //917L 커맨드 콘솔 로그
	}
	
	if (msg.content === '사과야 음악') {
		msg.reply('원하면 디스코드 Apple6050#1781로 추가해달라고 해라 ㅡㅡ;;')
		console.log('Music Command Executed.'); //뮤직 커맨드 콘솔 로그
	}
	
	if (msg.content === '사과야 멍청이') {
		msg.reply('그러면 당신도... 멍청이!')
		console.log('Stupid Command Executed.'); //멍청이 커맨드 콘솔 로그
	}

	if (msg.content === '사과는 바보래요') {
		msg.reply('......... 님 밴할꺼임 ㅅㄱ')
		msg.reply('진짜로 밴할까...?')
		console.log('Babo... Command Executed.'); //BABO... 커맨드 콘솔 로그
	}
	
	if (msg.content === '사과야 머리아파') {
		msg.reply('게보린 머거! https://www.youtube.com/watch?v=20at_w21LlQ')
		console.log('Headache Command Executed.'); //HEADACHE 커맨드 콘솔 로그
	}

	if (msg.content === '사과야 테스트') {
		msg.reply('테스트')
		console.log('TEST_COMMAND EXECUTED.');
});

client.login('token');
