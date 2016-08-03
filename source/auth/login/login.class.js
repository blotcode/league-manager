const AUTH_PARAM = 'Authorizzation';
export default class Login{

  username = 'Luciano';
  fullName;
  token;
  authenticationKey;


  constructor(){
    this.fullName = 'Luciano Murruni';
    this.token = 'luciano:key';
  }

  set authenticationKey(value){
    this.authParam = AUTH_PARAM;
  }

  get authenticationKey(){
    return this.authParam;
  }

}