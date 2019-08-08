# NewCss
![](https://raw.githubusercontent.com/Traineratwot/NewCss/master/favicon.ico)
<table Table border=1 cellspacing=0 cellpadding=0
>
<tr >
	<td valign=top>
		<p align=center>Атрибут(data-)/параметр</p>
	</td>
	<td colspan=2 valign=top></td>
</tr>
<tr >
	<td colspan=3 valign=top>
		<p align=center>общий синтаксис</p>
	</td>
</tr>
<tr >
	<td valign=top>
		<p >newCss=&quot;1&quot;/<span lang=EN-US >null</span></p>
	</td>
	<td colspan=2 valign=top>
		<p >подключение библиотеки </p>
	</td>
</tr>
<tr >
	<td valign=top>
		<p ><span lang=EN-US >*</span>do=&quot;<span lang=EN-US
				>string</span>&quot;</p>
	</td>
	<td colspan=2 valign=top>
		<p ><span class=SpellE><span lang=EN-US >действие</span></span></p>
	</td>
</tr>
<tr >
	<td valign=top>
		<p ><span lang=EN-US >linkelem=&quot;selector
				jQuery&quot;</span></p>
	</td>
	<td colspan=2 valign=top>
		<p >указывает элемент относительно которого будет позиционирование</p>
	</td>
</tr>
<tr >
	<td valign=top>
		<p align=center>значение <span lang=EN-US >[</span>do<span
				lang=EN-US>]</span></p>
	</td>
	<td valign=top>
		<p align=center>Относительное позиционирование</p>
	</td>
	<td valign=top>
		<p align=center>Доп. атрибуты/параметры</p>
	</td>
</tr>
<tr >
	<td valign=top>
		<p ><span lang=EN-US >o</span><span class=SpellE>nblock</span></p>
	</td>
	<td valign=top>
		<p >накладывает блок на элемент указанный в [linkelem=&quot;&quot;]</p>
	</td>
	<td valign=top>
		<p ><span class=SpellE>Zindex</span>=&quot;<span lang=EN-US >int</span>&quot; -
			Z-<span class=SpellE>идекс</span>
			элемента (<span lang=EN-US >null</span>)</p>
	</td>
</tr>
<tr >
	<td valign=top>
		<p ><span class=SpellE><span lang=EN-US >underblock</span></span></p>
	</td>
	<td colspan=2 valign=top>
		<p >устанавливает блок под элементом linkelem, устанавливает ширину
			равную ширине linkelem</p>
	</td>
</tr>
<tr >
	<td valign=top>
		<p ><span class=SpellE>incenter</span></p>
	</td>
	<td colspan=2 valign=top>
		<p >устанавливает блок в центре linkelem</p>
	</td>
</tr>
<tr >
	<td valign=top>
		<p ><span class=SpellE>custom</span></p>
	</td>
	<td valign=top>
		<p >позиционирует блок относительно linkelem</p>
	</td>
	<td valign=top>
		<p >[<span class=SpellE>top</span>=&quot;100&quot;] [<span class=SpellE>left</span>=&quot;20%&quot;]
			либо <span class=GramE>пиксели</span> либо проценты позиция считается от
			центра блока проценты считаются от ширины или высоты видимой области</p>
	</td>
</tr>
<tr >
	<td valign=top>
		<p ><span class=SpellE>aboveblock</span></p>
	</td>
	<td colspan=2 valign=top>
		<p >устанавливает блок над элементом linkelem, устанавливает ширину
			равную ширине linkelem</p>
	</td>
</tr>
<tr >
	<td valign=top>
		<p ><span class=SpellE>leftblock</span></p>
	</td>
	<td colspan=2 valign=top>
		<p >устанавливает блок слева от элемента linkelem, устанавливает высоту
			равную высоте linkelem</p>
	</td>
</tr>
<tr >
	<td valign=top>
		<p ><span class=SpellE>rightblock</span></p>
	</td>
	<td colspan=2 valign=top>
		<p >устанавливает блок справа элемента linkelem, устанавливает высоту
			равную высоте linkelem</p>
	</td>
</tr>
<tr >
	<td valign=top>
		<p >&nbsp;</p>
	</td>
	<td colspan=2 valign=top>
		<p >&nbsp;</p>
	</td>
</tr>
<tr >
	<td valign=top>
		<p align=center>&nbsp;</p>
	</td>
	<td valign=top>
		<p align=center>утилиты</p>
	</td>
	<td valign=top>
		<p >&nbsp;</p>
	</td>
</tr>
<tr >
	<td valign=top>
		<p >&nbsp;</p>
		<p ><span class=SpellE>watermark</span></p>
	</td>
	<td valign=top>
		<p >накладывает изображение на изображение</p>
	</td>
	<td valign=top>
		<p ><span class=SpellE>watermark</span>=&quot;путь к накладываемому
			изображению&quot;</p>
	</td>
</tr>
<tr >
	<td valign=top>
		<p ><span class=SpellE>ClickSwitch</span></p>
	</td>
	<td valign=top>
		<p >переключает класс у выбранного элемента по клику на этом блоке. Сохраняет
			ранее установленные классы также работает с [linkelem=&quot;&quot;]</p>
	</td>
	<td valign=top>
		<p >[class0=&quot;<span class=GramE>&quot;](</span>класс первого клика)</p>
		<p >[class1=&quot;<span class=GramE>&quot;](</span>класс второго клика</p>
		<p >[linkelem=&quot;&quot;]</p>
	</td>
</tr>
<tr >
	<td valign=top>
		<p ><span class=SpellE>drag_drop</span></p>
	</td>
	<td valign=top>
		<p >дает возможность перетаскивать блок по клику</p>
	</td>
	<td valign=top>
		<p >[<span class=SpellE>hold</span>=&quot;1&quot;]-удерживать чтобы
			тащить</p>
		<p >[linkelem=&quot;&quot;]</p>
	</td>
</tr>
<tr >
	<td valign=top>
		<p ><span class=SpellE>clear</span></p>
	</td>
	<td valign=top>
		<p >убирает атрибут [<span class=SpellE>style</span>]</p>
	</td>
	<td valign=top>
		<p >&nbsp;</p>
	</td>
</tr>
</table>
<H1>Подключение</h1>

```php
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="NewCssOOP.js"></script>
<script>
// способ 1
$(document).ready(NewCss(Селектор));
// здесь можно выбрать любой jquery селектор.или оставить по умолчанию 
// способ 2
unit = new newCss("#c", {
		"do": "underblock",
		"linkelem": "#a",
	})
</script>
```

