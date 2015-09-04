
// Define all services for tableModule

tableModule.service('tableService', function() {
    return { 
    	getAllUsers: function() {
    	       return [
    	          {name:'Paul', email:'paul.jones@asf.ro'},
    	          {name:'John', email:'john.meyers@wood.com'},
    	          {name:'Lucie', email:'lucie.safarova@gmail.com'}
    	       ];
    	    }
    	
    };
 });
