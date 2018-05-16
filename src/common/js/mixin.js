export const baseUrlMixin = {
  methods: {
    addBase(key) {
      return 'http://qiniumovie.hasakei66.com/' + key
    }
  }
}

export const handleContent = {
  methods: {
    formateDate(pubdates) { // 格式化发行日期 2017-1-1(美国)/2017-3-1(中国)
      let ret = ''
      pubdates.forEach((pubdate, index) => {
        let now = new Date(pubdate.date)
        ret += now.getFullYear() + '-' + now.getMonth() + '-' + now.getDate()
        if (pubdate.country) {
          ret += `(${pubdate.country})`
          if (!(index === pubdates.length - 1)) ret += '/'
        }
      })
      return ret
    }
  }
}