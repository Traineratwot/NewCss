<p># NewCss ![](https://raw.githubusercontent.com/Traineratwot/NewCss/master/favicon.ico)</p>

<table border="1" cellpadding="0" cellspacing="0">
	<tbody>
		<tr>
			<td>
			<p>Атрибут(data-)/параметр</p>
			</td>
			<td colspan="2">&nbsp;</td>
		</tr>
		<tr>
			<td colspan="3">
			<p style="text-align:center"><strong>общий синтаксис</strong></p>
			</td>
		</tr>
		<tr>
			<td>
			<p>newCss=&quot;1&quot;/null</p>
			</td>
			<td colspan="2">
			<p>подключение библиотеки</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>*do=&quot;string&quot;</p>
			</td>
			<td colspan="2">
			<p>действие</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>createrulle=&quot;bool&quot;</p>
			</td>
			<td colspan="2">
			<p>если 1 то создает на страницу в head тег style и записывает все туда&nbsp;</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>linkelem=&quot;selector jQuery&quot;</p>
			</td>
			<td colspan="2">
			<p>указывает элемент относительно которого будет позиционирование</p>
			</td>
		</tr>
		<tr>
			<td>
			<p style="text-align:center"><strong>значение [do]</strong></p>
			</td>
			<td>
			<p style="text-align:center"><strong>Относительное позиционирование</strong></p>
			</td>
			<td>
			<p style="text-align:center"><strong>Доп. атрибуты/параметры</strong></p>
			</td>
		</tr>
		<tr>
			<td>
			<p>onblock</p>
			</td>
			<td>
			<p>накладывает блок на элемент указанный в [linkelem=&quot;&quot;]</p>
			</td>
			<td>
			<p>Zindex=&quot;int&quot; - Z-идекс элемента (null)</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>underblock</p>
			</td>
			<td colspan="2">
			<p>устанавливает блок под элементом linkelem, устанавливает ширину равную ширине linkelem</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>incenter</p>
			</td>
			<td colspan="2">
			<p>устанавливает блок в центре linkelem</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>custom</p>
			</td>
			<td>
			<p>позиционирует блок относительно linkelem</p>
			</td>
			<td>
			<p>[top=&quot;100&quot;] [left=&quot;20%&quot;] либо пиксели либо проценты позиция считается от центра блока проценты считаются от ширины или высоты видимой области</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>aboveblock</p>
			</td>
			<td colspan="2">
			<p>устанавливает блок над элементом linkelem, устанавливает ширину равную ширине linkelem</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>leftblock</p>
			</td>
			<td colspan="2">
			<p>устанавливает блок слева от элемента linkelem, устанавливает высоту равную высоте linkelem</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>rightblock</p>
			</td>
			<td colspan="2">
			<p>устанавливает блок справа элемента linkelem, устанавливает высоту равную высоте linkelem</p>
			</td>
		</tr>
		<tr>
			<td>
			<br>
			</td>
			<td colspan="2">
			<br>
			</td>
		</tr>
		<tr>
			<td>
			<br>
			</td>
			<td>
			<p style="text-align:center"><strong>утилиты</strong></p>
			</td>
			<td>
			<br>
			</td>
		</tr>
		<tr>
			<td>
			<br>
			<p>watermark</p>
			</td>
			<td>
			<p>накладывает изображение на изображение</p>
			</td>
			<td>
			<p>watermark=&quot;путь к накладываемому изображению&quot;</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>ClickSwitch</p>
			</td>
			<td>
			<p>переключает класс у выбранного элемента по клику на этом блоке. Сохраняет ранее установленные классы также работает с [linkelem=&quot;&quot;]</p>
			</td>
			<td>
			<p>[class0=&quot;&quot;](класс первого клика)</p>
			<p>[class1=&quot;&quot;](класс второго клика</p>
			<p>[linkelem=&quot;&quot;]</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>drag_drop</p>
			</td>
			<td>
			<p>дает возможность перетаскивать блок по клику</p>
			</td>
			<td>
			<p>[hold=&quot;1&quot;]-удерживать чтобы тащить</p>
			<p>[linkelem=&quot;&quot;]</p>
			</td>
		</tr>
		<tr>
			<td>
			<p>clear</p>
			</td>
			<td>
			<p>убирает атрибут [style]</p>
			</td>
			<td>
			<br>
			</td>
		</tr>
	</tbody>
</table>
<H1>Подключение</h1>
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="NewCss.js"></script>
<script>
// способ 1
$(document).ready(NewCss(Селектор));
// здесь можно выбрать любой jquery селектор.или оставить по умолчанию 
// способ 2
unit = new newCss('#c', {
		'do': 'underblock',
		'linkelem': '#a',
	})
</script>
```
</textarea>
