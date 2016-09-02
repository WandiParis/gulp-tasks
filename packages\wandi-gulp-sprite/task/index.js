import gulp from 'gulp'
import spritesmith from 'gulp.spritesmith'
import replace from 'gulp-replace'
import merge from 'merge-stream'
import {sync as rm} from 'rimraf'
import config from './config'

const sprite = (params = {}) => {
    const cfg = {
        ...config,
        ...params
    }

    const {
        cssName,
        imgPath,
        imgName,
        scssDest,
        src
    } = cfg

    const task = () => {
        rm(`${imgPath}/${imgName}`)

        const spriteStreams = gulp.src(src)
            .pipe(spritesmith({
                imgName,
                cssName
            }))

            spriteStreams.img.pipe(gulp.dest(imgPath))

            spriteStreams.css
                .pipe(replace(`'${imgName}'`, `'../img/${imgName}'`))
                .pipe(gulp.dest(scssDest))

            return merge(spriteStreams.img, spriteStreams.css)
    }

    task.displayName = 'sprite'
    task.description = 'Merge icons into a sprite file and generate SCSS code to use it'

    return task
}

export default sprite
export {
    sprite
}
