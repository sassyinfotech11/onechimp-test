import fs from 'fs'

const exportUtil = (dir: string, callback: (file: string) => any): void => {
  fs
    .readdirSync(dir)
    .filter(
      filename =>
        /^\w+(.\w+)?(.ts|.js)$/.test(filename) &&
        !/^index.(ts|js)$/.test(filename)
    )
    .forEach(callback)
}

export default exportUtil
