
app.controller('survey_controller', ['$scope','$cookies','$location','$routeParams','survey_factory',

    function($scope,$cookies,$location,$routeParams,survey_factory)
    {
      console.log('survey_controller loaded');

	$scope.logoutUser = function(){
        // console.log("logoutUser");
        $cookies.remove("name");
        $cookies.remove("_id");
        // console.log("logged out", $scope.currentUser);
        $scope.currentUser = {};
        $location.path('/');
    };

       $scope.polls = survey_factory.getPolls(function(data) {
        $scope.polls = data;
    });


       $scope.the_poll = survey_factory.getOnePoll($routeParams.id, function(poll){
       	console.log('poll',poll)
    	$scope.the_poll = poll;
    	// console.log('$scope.the_poll',$scope.the_poll)

    })

    	$scope.addUser = function(){
        console.log($scope.new_user, "survey_controller");
        survey_factory.addUser($scope.new_user, function(data){
        	console.log('data',data.data)
            $scope.currentUser = data.data;
            $cookies.put('name', data.data.name);
            $cookies.put('_id', data.data._id);
            console.log($scope.currentUser, "logging current user");
            $location.path('/dashboard' );
        });
    }



    $scope.addPoll = function(){
        console.log($scope.new_poll, "in ");
        var id = $cookies.get('_id');

        survey_factory.addPoll($scope.new_poll, id, function(data){
            $scope.addedPoll = data;
            

            $scope.polls = survey_factory.getPolls(function(data) {
     
                $scope.polls = data.polls;
            });
        });
    	$location.path('/dashboard/' + $cookies._id );
    	$scope.polls = survey_factory.getPolls(function(data) {
              
                $scope.polls = data.polls;
         });

    }

      $scope.addVote = function(option) {
    	var option = option;
    	var id = $routeParams.id;
    	survey_factory.addVote(option, id, function(data){
    		console.log(data, "added");
            survey_factory.getOnePoll($routeParams.id, function(poll){

                $scope.the_poll = poll;

            })

    	});
    }


  	}
  	// function
  	
  ]);