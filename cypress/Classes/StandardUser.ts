// User.ts

class User {
    public standard: string;
    public password: string;
    public error: string;
    public problem:string;
    public lockedOut: string; 
  
    constructor() {
      this.standard = 'standard_user';
      this.password = 'secret_sauce';
      this.error = 'error_user';
      this.problem = 'problem_user';
      this.lockedOut = 'locked_out_user';
    }
  }
  
  export default User;
  