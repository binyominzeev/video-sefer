# video-sefer

A HTML setup for creating Hebrew text learning videos. See demo at <https://video-sefer.surge.sh/>.

![Video Sefer in action](https://raw.githubusercontent.com/binyominzeev/video-sefer/main/Screenshot_2020-12-27_21-41-31.png)

## Usage

I am using it currently for a Chumash-Rashi shiur, so I need two sources, one at the right, one at the bottom of the screen.

- Put your text into the source files with LibreOffice Writer.
- I use [Torat Emet](http://www.toratemetfreeware.com/online/a_root.html) for the Chumash text, [Alhatorah](https://mg.alhatorah.org/) for Rashi
  - **OPTIONAL (but useful):** use the two `.user.js` scripts in the directory with Tampermonkey. This will replace dashes to maqafs in Torat Emet and remove the footnotes from Alhatorah.
- I use SBL Hebrew font for displaying both (32 and 22 points, respectively). If you change font size, you might want to fine tune line heights in `chumas.css` and `rasi.css`.
- Enter title to display in `video_sefer.html`.
- Show it in browser window (I use Chrome).
- Add a camera to the top left corner. For this, you can use a webcam and guvcview, or record with phone/tablet separate, and mix the two channels later (I use Shotcut for that).
- Record the screen (I use SimpleScreenRecorder for that)
- During recording, switching chapter can be done by simply clicking on chapter number. Left click increases, right click decreases the counter.

**Hint:** if you use a phone or tablet for the recording, even just for the audio, you can achieve better sound quality. Even in this case it is good to record the sound input to the computer with SimpleScreenRecorder, so that it will be easier to align the recorded video with the audio.

**Important:** the CSS settings won't work correctly (because of the default security settings) if you open the HTML (`video-sefer.html`) locally. Therefore, use a localhost / Apache instead.

# TODO

## Maqaf script

Unfortunately currently breaking the formatting, losing the bold of the pasukim. Has to be corrected.





