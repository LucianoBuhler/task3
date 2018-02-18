var express = require('express');
var router  = express.Router();
var _querystring = require('querystring')

// Imports the Google Cloud client library
const language = require('@google-cloud/language');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'NAVOMI TASK #3',
                          _resLabel: ''
                        });
});

// Recieve data of form
router.post('/formSentence', function(_req, _res, _next) {
    var _fSentence = _req.body.fSentence,

        _returnRes = msgSentiment(_fSentence, _res);
});

// return to
module.exports = router;

// Functions to sentiment analizes
function msgSentiment(_msg, _resp)
{
    // Creates a client
    const _client = new language.LanguageServiceClient();

    var _returnHTML = '',
        _returnMSG = '',
        _returnSentiment = ''

    // Prepares a document, representing the provided text
    const document = {
        type: 'PLAIN_TEXT',
        language: "EN",
        content: _msg
    };

    // Detects the sentiment of the document
    _client
        .analyzeSentiment({document: document}) // Analyzes the sentiment of the provided text.
        .then(results => {
            const sentiment = results[0].documentSentiment; // return with 'magnitud' and 'score' sentiments of the sentence
            const sentences = results[0].sentences; //return Array of objects ('text' and 'sentiment') with the sentiment for all the sentences in the document.
            sentences.forEach(sentence => {
                // sentiment analizer
                if(sentiment.score >= -0.25 && sentiment.score <= 0.25){ // neutral
                    _returnMSG = 'Nice too me too Mr. Spock, neither hot nor cold';
                    _returnSentiment = 'Neutral';
                } else if (sentiment.score > 0.25){ // positive
                    _returnMSG = 'Uhull! Go to the top.';
                    _returnSentiment = 'Positive';
                } else if (sentiment.score < -0.25){ // negative
                    _returnMSG = "It's really? Your life can be better!";
                    _returnSentiment = 'Negative';
                }

                _returnHTML += `\nSentence:  ${sentence.text.content}` +
                               `\nSentiment: ${_returnSentiment}` +
                               `\nMessage:   ${_returnMSG}\n\n`;
             });

            console.log('1. (' + _returnHTML + ')')
            _resp.render('index', { _resLabel: _returnHTML,
                                    title: 'NAVOMI TASK #3'
                                  });
        })

        .catch(err => {
            console.error('ERROR:', err);
        });
}
