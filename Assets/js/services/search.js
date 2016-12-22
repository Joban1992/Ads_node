angular.module("app.services", []).service("serachService", function(){
  var serachService = {};
  serachService.searchedQuery = "";
  
  serachService.getSearchedQuery = function(){
    return serachService.searchedQuery;
  }
  
  serachService.setSearchedQuery = function(query){
    console.log("Query : "+query);
    return serachService.searchedQuery = query;
  }
  
  serachService.getSearchedResults = function(query){
    console.log("Hitting Server for Search Results");
  }
  
  return serachService;
})