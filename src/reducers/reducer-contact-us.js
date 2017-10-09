import { SENDING_MAIL, MAIL_SENT } from '../actions/index';

export default function(state = {sendingMail: false, mailSent: false}, action) {
	console.log(action);
	switch(action.type) {
		case SENDING_MAIL:
			return { ...state, sendingMail: true, mailSent: false };
		case MAIL_SENT:
			return { ...state, sendingMail: false, mailSent: true };
	}
	return state;
}