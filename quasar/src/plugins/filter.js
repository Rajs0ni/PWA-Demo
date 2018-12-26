// import something here

// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  
  Vue.filter('parseDate', function (value) {
    var date = new Date(value);
    var dd = date.getDate();
    var mm = date.getMonth();
    mm += 1;
    var yyyy = date.getFullYear();
    return dd + '/' + mm + '/' + yyyy;
  })
}
