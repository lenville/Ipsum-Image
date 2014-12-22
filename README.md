Ipsum-Image
===========

* pure javascript placeholder for images in local projects
> 纯js打造的本地占位符生成器

* just include Ipsum-Image.js in your projects and everything will be done
> 引入 Ipsum-Image.js 到项目中就可以自动生成所有的 占位图

[demo here](http://lenville.github.io/Ipsum-Image)

* There are two types of placeholder for now
> 现在支持两种类型的图（嗯，只是颜色生成的方式不一样……


* Type 0 generates a random color (default) for each pic and text
> Type 0 就是随机生成所有的颜色


* Type 1 generates an array contains a pair of conflicting colors for one set of placeholder
> Type 1 按照反色关系，分别生成占位图的背景和文字的颜色

Type 0 likes this

    <img w="100" h="100">
    <img type="0" w="100" h="100">
Type 1 likes this

    <img type="1" w="100" h="100">
