
angular.module('app', ["ngResource"])
  .controller('listdata', function($scope,$http) {
    $scope.greeting = {id: 'xxx', content: 'Hello World!'}
    
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;}
    
    
	
	
	//tipo_documento

	$scope.tdocu=[];
	$http.get("http://localhost:8090/tipo_documento").success(function(response){

		$scope.tdocu = response;  //ajax request to fetch data into $scope.data
	});
   

	
	
	//tipo_corresponencia

	$scope.tcorresp=[];
	$http.get("http://localhost:8090/tipo_corresp").success(function(response){

		$scope.corresp = response;  //ajax request to fetch data into $scope.data
	});
   
///
	
	$scope.catg=[];
	$http.get("http://localhost:8090/categoria")

					.success(function(response){

		$scope.catg = response;  //ajax request to fetch data into $scope.data

	});
	
	//refrescar 
	$scope.persons	= [];

	$scope.loadData = function () {
		$http.get("http://localhost:8090/ingreso_documentoD")
				.success(function(response) {
					//alert("sssssssss")
			$scope.persons = response;
		});
	};
	//
	$scope.DropDownChnaged = function () {
        $scope.ValorDrop= $scope.doc.tipoCorresp;
        
		//alert($scope.ValorDrop);
		if ($scope.ValorDrop === 1) {
	       // alert("Local");
	        //
	        $scope.dist=[];
	        $scope.dj=[0];
	    	$http.get("http://localhost:8090/Distrito")

	    			.success(function(response){

	    				//alert("")
	    		$scope.dist = response;

	    		//ajax request to fetch data into $scope.data
	    	});
	     //
	        
	      }
		else {
			//alert("Nacional");
			$scope.dist=[0];
			
			///distritos judiciales de provincias
			 //
	        $scope.dj=[];
	    	$http.get("http://localhost:8090/distritos_provincia")

	    			.success(function(response){

	    				//alert("")
	    		$scope.dj = response;

	    		//ajax request to fetch data into $scope.data
	    	});
	     //
			//
			
		}
		
	      return '';
	
	};
	
	//copia
	$scope.persona= [];

	
		$http.get("http://localhost:8090/ingreso_documentoD")
				.success(function(response) {
			$scope.persona = response;
		});
	
	
	
	//fin de refrescar
	
	$scope.borra = function() {

		//$scope.doc.destino="";
		$scope.doc.ape_materno="";
		$scope.doc.nombres="";
		//$scope.doc.serieDoc="";
		$scope.doc.ape_paterno="";
		
		


	};
	$scope.borra1 = function() {

		//$scope.doc.destino="";
		$scope.doc.ape_materno=" ";
		$scope.doc.nombres=" ";
		//$scope.doc.serieDoc="";
		$scope.doc.ape_paterno=" ";
		
		


	};
	//Institutos
	$scope.inst=[];
	$http.get("http://localhost:8090/institutos").success(function(response){

		$scope.inst = response;  //ajax request to fetch data into $scope.data
	});
///cambiar en otro reset al momento de dar click
	//los datos personales se eliminan de ""
	$scope.reset = function() {
        //alert("click datos apeee")
		$scope.doc.idInstituto="0"
			$scope.doc.ape_materno="";
		$scope.doc.nombres="";
		//$scope.doc.serieDoc="";
		$scope.doc.ape_paterno="";	
			
	};
	
	
	
	///
	$scope.users2 = [];
	$scope.getFilms = function() {
		$http.get('/ingreso_documentoD')
		.success(function(response) {
			$scope.userss2 = response;
			
			
		})
		.
		error(function(data) {
			//$scope.isDisabled = true;

			
			//myModal.modal("hide");
			//$scope.isDisabled = false;
			//myModal.modal("show");
			alert("Se ha producido Error");
			

		});
	}
//resetear
	$scope.resetear = function() {
		alert("resetear");
		$scope.doc="";
	}
///
	$scope.opportunity = '';

	$scope.isShown = function(opportunity) {

		return opportunity === $scope.opportunity;
	};
	
	$scope.buscar = function() {
		  
		var res=$http.post('/busqueda_documentoD',
				objeto={
				
				direccion: $scope.doc.direccion
				
		}		
		);
		valor=$scope.doc.direccion;  
		  alert(valor); 
		res.success(function(data) {
		
			//rest/managedCourse/:courseId", {courseId:'@id'});
			$scope.responseData = data;
			//alert("responseData"+ direccion);
			///////////////////////////
			$scope.busca1=[];
			
			//Hotel.get({id:1})
			//$resource('/user/:userId', {userId:'@id'});
		//	$http.get("http://localhost:8090/parametro/000001")
$http.get("http://localhost:8090/parametro/"+$scope.doc.direccion)

							.success(function(response){
								//alert(busca1);
				$scope.busca1 = response;  //ajax request to fetch data into $scope.data

			});
			//alert($scope.responseData);
			
			
			
			
		});
		res.error(function(data, status, headers, config) {
			alert( "Exception details: " + JSON.stringify({data: data}));
		});
		
		
	}
	
	
	
	////
	$scope.addFilm = function() {
	//
		
		 if($scope.doc.ape_materno!=" undefined."){
			 //  $scope.idInstituto=1;
	      //
			//
			//alert("valor "+ $scope.idInstituto);
			   $scope.idInstituto=0;


		   }
		var response = $http.post('/ingreso_documentoD', 
		//paso de valores scope al arreglo 		
		
				
				objeto={
				serieDoc:$scope.doc.serieDoc, 
				idDistrito:$scope.doc.idDistrito,
				
				year : $scope.year,
				destino : $scope.destino,
				tipoCorresp:  $scope.doc.tipoCorresp,
			//	impreso : $scope.impreso

				//direccion : $scope.idDistrito,
				
				//codigoCategoria: $scope.codigoCategoria,
				idCategoria: $scope.doc.codigoCategoria,
				direccion: $scope.doc.direccion,
				dApellidoMat: $scope.doc.ape_materno,
				dApellidoPat: $scope.doc.ape_paterno,
				dNombres: $scope.doc.nombres,
				
				nroDocumento:$scope.doc.nroDoc,
				dInstitucion:$scope.idInstituto,
				tipoCorresp:$scope.doc.tipoCorresp
				
		}
		);
		response.success(function(data) {
			//alert("Registro")
			$scope.responseData = data;
			
			$scope.loadData();
			////jala datos  modal
			
			
			///
			$scope.submitForm = function() {
				

				if($scope.doc.ape_materno!=" undefined."){
					 //  $scope.idInstituto=1;
			      //
					//
					
					   $scope.idInstituto=0;


				   }
				
				 if ($scope.userForm.$valid) {
					
					alert("ok")
					
					$scope.loadData();
					
				}
				else{
					alert("Direccion no ingresada")
				}
					
					
			}
			
			$scope.doc="";
			
		});
		response.error(function(data, status, headers, config) {
			alert( "Exception details: " + JSON.stringify({data: data}));
		});
		
	
	//	
	}
	
	
	
	
	
	
	});