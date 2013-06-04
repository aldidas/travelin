TiketApp.factory('Gettoken', function($resource){
		return $resource(apiUrl+'apiv1/:action',
			{action:'payexpress', method:'getToken', output:'json', secretkey:secret },
			{get:{method:'GET', isArray: false}}
		);
	});