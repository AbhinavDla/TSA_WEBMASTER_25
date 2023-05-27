import { Twilio } from 'twilio';

const accountSid = 'AC333f764c02eea693ee415b108ea8f432';
const authToken = '69f4e310d3e671ec495557cf96b0e1da';
const twilioPhoneNumber = '+18555742495';

const twilioClient = new Twilio(accountSid, authToken);

export { twilioClient, twilioPhoneNumber };
