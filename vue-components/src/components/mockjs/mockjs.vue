<template>
  <div>
    <div class="main">
		<table border="1" cellspacing="0" cellpadding="10">
      <caption>mockjs using</caption>
			<thead>
				<tr>
					<th>Type</th>
					<th>Method</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Basic</td>
					<td>boolean, natural, integer, float, character, string, range, date, time, datetime, now</td>
				</tr>
				<tr>
					<td>Image</td>
					<td>image, dataImage</td>
				</tr>
				<tr>
					<td>Color</td>
					<td>color</td>
				</tr>
				<tr>
					<td>Text</td>
					<td>paragraph, sentence, word, title, cparagraph, csentence, cword, ctitle</td>
				</tr>
				<tr>
					<td>Name</td>
					<td>first, last, name, cfirst, clast, cname</td>
				</tr>
				<tr>
					<td>Web</td>
					<td>url, domain, email, ip, tld</td>
				</tr>
				<tr>
					<td>Address</td>
					<td>area, region</td>
				</tr>
				<tr>
					<td>Helper</td>
					<td>capitalize, upper, lower, pick, shuffle</td>
				</tr>
				<tr>
					<td>Miscellaneous</td>
					<td>guid, id</td>
				</tr>
			</tbody>
		</table>      
    </div>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  mounted(){
		// 两个接口mock，不同文件
    Axios.get('api/mocktest').then(res => {
    　console.log(res.data.articles)
		})
    Axios.get('api/mocktest2').then(res => {
    　console.log(res.data.articles)
    })
  }
}
</script>
<style scoped>
.main{text-align: left}
</style>
