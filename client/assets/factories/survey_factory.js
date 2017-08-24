app.factory('survey_factory',function($http){
        console.log('start survey_factory');

        var factory = {};
        
        factory.addUser = function(info, callback) 
        {
          var data = {name:info}
          console.log('info',info)
          $http.post('/user', data).then(function(data){
          callback(data);
          })
        };

        factory.getPolls = function (callback){
        $http.get('/poll').success(function(output) {
        polls = output;
        callback(polls);
        })
  }

  factory.getOnePoll = function (id, callback){
    $http.get('/poll/' + id).success(function(output){
      callback(output);
    })
  }


        // factory.addPoll = function(info, id, callback) {
        // // var data = {name:info}
        // console.log(info,'info')
        // $http.post('/poll' , info).success(function(data){
        // callback(data);
        // })


          factory.addPoll = function(info, id, callback) {

          $http.post('/poll/' + id , info).success(function(data){
          callback(data);
        })
  };

  factory.addVote = function(option, id, callback) {
    // console.log(option, "in factory");
    // console.log(id, "in factory");
    // add option as a JSON object...
    console.log(option);
    var option = {"option": option};
    $http.put('/poll/update/' + id ,option).success(function(data){
      callback(data);
    })
  };

  
       
        return factory;
    })


    // $http.post('/users', user).then(function(returned_data)
    // {
    //   // console.log('user',user)
    //   // console.log('returned_data in belt factory', returned_data.data)
    //   logged_in_user = returned_data.data;
    //   // console.log('logged_in_user inside register_user belt factory',logged_in_user)
    //   if (typeof(callback) == 'function')
    //   {
    //     // console.log('user in belt factory', user)
    //     callback(user);
    //   }
    // });