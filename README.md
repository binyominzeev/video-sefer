# video-sefer

A HTML setup for creating Hebrew text learning videos. See demo at <https://video-sefer.surge.sh/>.

## Usage

I am using it currently for a Chumash-Rashi shiur, so I need two sources, one at the right, one at the bottom of the screen.

- Put your text into the source files with LibreOffice Writer.
- I use [Torat Emet](http://www.toratemetfreeware.com/online/a_root.html) for the Chumash text, [Alhatorah](https://mg.alhatorah.org/) for Rashi
- I use SBL Hebrew font for displaying both (32 and 15 points, respectively). If you change font size, you might want to fine tune line heights in `chumas.css` and `rasi.css`.
- Enter title to display in `video_sefer.html`.
- Show it in browser window (I use Chrome).
- Add a camera to the top left corner. For this, you can use a webcam and guvcview, or record with phone/tablet separate, and mix the two channels later (I use Shotcut for that).
- Record the screen (I use SimpleScreenRecorder for that)
- During recording, switching chapter can be done by simply clicking on chapter number. Left click increases, right click decreases the counter.

**Hint:** if you use a phone or tablet for the recording, even just for the audio, you can achieve better sound quality. Even in this case it is good to record the sound input to the computer with SimpleScreenRecorder, so that it will be easier to align the recorded video with the audio.

**Important:** the CSS settings won't work correctly (because of the default security settings) if you open the HTML (`video-sefer.html`) locally. Therefore, use a localhost / Apache instead.

## TODO

### Maqaf

Maqaf in the Chumash text is: ־ (instead of normal hyphen: -).

It is challenging to search-and-replace in Javascript, since in original Torat Emet version there are hyphens. As long as the search-and-replace happens in LibreOffice Writer, everything works fine.

A Javascript attempt was made (can be seen commented in `video-sefer.js`), but did not work out, since LibreOffice adds a lot of formatting tags during HTML conversion, which are non-trivial to remove.



