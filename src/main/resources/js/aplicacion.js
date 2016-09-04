
angular.module('app', [])
  .controller('listdata', function($scope,$http) {

	$scope.users = []; //declare an empty array
	//$http.get("https://restcountries.eu/rest/v1/all").success(function(response){
	$http.get("http://192.168.1.35:8090/lista").success(function(response){
		//$http.get("http://localhost:8090/films").success(function(response){
          //  $http.get("http://localhost:8090/issues").success(function(response){


		//$http.get("http://localhost:8080/greeting").success(function(response){


		/*$http.get("mockJson/mock.json").success(function(response){*/
			$scope.users = response;  //ajax request to fetch data into $scope.data
	});

	$scope.llamada = function() {
		$scope.variable1=12;

	}

	$scope.persons= [];

		$scope.loadData = function () {
			$http.get("http://192.168.1.35:8090/ingreso_documentoD")
					.success(function(response) {
				$scope.persons = response;
			});
		};

		//initial load





	$scope.users2 = []; //declare an empty array
	//$http.get("https://restcountries.eu/rest/v1/all").success(function(response){


	$http.get("http://192.168.1.35:8090/ingreso_documentoD")

		.success(function(response) {


			$scope.users2 = response;  //ajax request to fetch data into $scope.data

		});
////
	$scope.GetValue = function (countryy) {

//alert($scope.idDistrito)
		//var fruitId = $scope.idDistrito;

		//var fruitName = $.grep($scope.Fruits, function (fruit) {
		//	return countryy.idDistrito == $scope.idDistrito;
		//})[0].Name;
		//$window.alert("Selected Value: " + fruitId + "\nSelected Text: " + fruitName + "  ddlFruits "+ $scope.ddlFruits) ;
	}

///
	$scope.dep=[];
	$http.get("http://localhost:8090/dependencia").success(function(response){

		$scope.dep = response;  //ajax request to fetch data into $scope.data

	});


	$scope.dist=[];
	$http.get("http://192.168.1.35:8090/Distrito")

			.success(function(response){

		$scope.dist = response;

		//ajax request to fetch data into $scope.data
	});

	//Institutos
	$scope.inst=[];
	$http.get("http://192.168.1.35:8090/institutos").success(function(response){

		$scope.inst = response;  //ajax request to fetch data into $scope.data
	});

	$scope.reset = function() {

		$scope.doc.idInstituto=""
	};

	$scope.borra = function() {

		//$scope.doc.destino="";
		$scope.doc.ape_materno="";
		$scope.doc.nombres="";
		//$scope.doc.serieDoc="";
		$scope.doc.ape_paterno="";


	};

	// $scope.codigo=[];
	// $http.get("http://localhost:8090/books").success(function(response){
    //
    //
	// 	$scope.codigo = response;  //ajax request to fetch data into $scope.data
    //
	// 	code=response;
    //
	// });


	$scope.opportunity = '';

	$scope.isShown = function(opportunity) {

		return opportunity === $scope.opportunity;
	};

	$scope.catg=[];
	$http.get("http://192.168.1.35:8090/categoria")

					.success(function(response){

		$scope.catg = response;  //ajax request to fetch data into $scope.data

	});

	$scope.sort = function(keyname){
		$scope.sortKey = keyname;   //set the sortKey to the param passed
		$scope.reverse = !$scope.reverse; //if true make it false and vice versa
	}

	//tipo_documento

	$scope.tdocu=[];
	$http.get("http://192.168.1.35:8090/tipo_documento").success(function(response){

		$scope.tdocu = response;  //ajax request to fetch data into $scope.data
	});

	$scope.sort = function(keyname){
		$scope.sortKey = keyname;   //set the sortKey to the param passed
		$scope.reverse = !$scope.reverse; //if true make it false and vice versa
	}

	$scope.resetear = function() {
		alert("resetear");
		$scope.doc="";
	}

	$scope.users3 = []; //declare an empty array
	//$http.get("https://restcountries.eu/rest/v1/all").success(function(response){
	$http.put("http://192.168.1.35:8090/documentou").success(function(response){
		//$http.get("http://localhost:8090/films").success(function(response){
		//  $http.get("http://localhost:8090/issues").success(function(response){
///////

///////////
		//$http.get("http://localhost:8080/greeting").success(function(response){


		/*$http.get("mockJson/mock.json").success(function(response){*/
		$scope.users3 = response;  //ajax request to fetch data into $scope.data

	});


	$scope.addFilm = function() {
  

/*
	  



    //alert($scope.codigo)

		//$http.post('http://localhost:8090/films',
          //  $http.post('http://localhost:8090/issues',
		$http.post('http://192.168.1.35:8090/ingreso_documentoD',
				//$http.get("http://192.168.1.35:8090/tipo_documento").success(function(response){

			objeto=	{
				//dependencia : $scope.dependenciaw,
				year : $scope.year,
				destino : $scope.destino,
			//	impreso : $scope.impreso

				//direccion : $scope.idDistrito,
				idDistrito : $scope.doc.idDistrito,
				//codigoCategoria: $scope.codigoCategoria,
				idCategoria: $scope.doc.codigoCategoria,
				direccion: $scope.doc.direccion,
				dApellidoMat: $scope.doc.ape_materno,
				dApellidoPat: $scope.doc.ape_paterno,
				dNombres: $scope.doc.nombres,
				serieDoc:$scope.doc.serieDoc,
				nroDocumento:$scope.doc.nroDoc,
				dInstitucion:$scope.idInstituto

			//	,
				//codigo: '0000
				//codigo: codigo


			}

		)

			.success(function(response) {
				//$scope.isDisabled = true;

				$scope.showModal = true;
					//var response = $http.post('http://192.168.1.35:8090/ingreso_documentoD', dataObj);
					//response.success(function(data, status, headers, config) {
					//	//$scope.responseData = data;

					//});
//modal

				$scope.loadData();
					$scope.doc="";

              //  $scope.msg = 'Pelicula creada correctamente';
			
				$scope.title="";

		//	alert(	$scope.getFilms());

//alert($scope.users2.idCategoria)

		}).error(function(data) {
			//$scope.isDisabled = true;


			//myModal.modal("hide");
			//$scope.isDisabled = false;
			//myModal.modal("show");
			//alert("Error");

			$scope.msg = 'Se ha producido un error';

		});
	}
*/
	//


});