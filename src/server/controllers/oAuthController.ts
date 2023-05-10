

const {google} = require('googleapis')
const url = require('url')


const oauth2Client = new google.auth.OAuth2(
  "1064967234338-lpljla832pka03qkmg5lg802uu8qm4ic.apps.googleusercontent.com",
  "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",
  "http://localhost:3000/callback"
)

const scope = ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile']

const authorizationUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope,
})

module.exports = {
  link: authorizationUrl
  ,
  login: (req, res) => {

    res.redirect(authorizationUrl);
  },

  getUserInfo: async (req, res, next) => {
    let q = url.parse(req.url, true).query;
    let { tokens } = await oauth2Client.getToken(q.code);
    oauth2Client.setCredentials(tokens);

    const people = google.people({version: 'v1', auth: oauth2Client});
    people.people.get({
      resourceName: 'people/me',
      personFields: 'emailAddresses,names,nicknames,photos,genders,birthdays,ageRanges,locales'
    }, (err, res) => {
      if (err) return console.log('The API returned an error: ' + err);

      console.log("Adress",res.data.emailAddresses , "name", res.data.names , "photo", res.data.photos)
    if(res.data.emailAddresses && res.data.names && res.data.photos) {

      res.locals = {
        email: res.data.emailAddresses[0].value,
        name: res.data.names[0].displayName,
        pictureUrl: res.data.photos[0].url
      } 
      console.log(res.locals)
      return next()
    }
    return next("error");
  });
  }
}