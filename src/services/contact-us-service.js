import { MAIL_SENT } from '../actions/index';

export default function sendMailService(form) {
	console.log(form)
	setTimeout(function(){ 
		return {
			type: MAIL_SENT,
			payload: form
		};
	}, 1000);
}

