if(process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI : 'mongodb://jarronb:Killaj12@ds145911.mlab.com:45911/vidjot-prodjb'
  };
}else {
  module.exports = {
    mongoURI : 'mongodb://localhost:27017/vidjot-dev'
  };
}