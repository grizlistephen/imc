<%php
/*
	antispam.php
	Source: http://khromov.wordpress.com/2011/10/04/php-function-for-scrambling-e-mail-addressesphone-numbers-using-javascript/	
	
*/

function safe_text($text)
{
    if(mb_detect_encoding($text, 'UTF-8', true))
        $text = utf8_decode($text);
 
    $ret = '
<script type="text/javascript">// <![CDATA[
                    var t=[
                ';
    $chars = str_split($text);
 
    $enc[] = rand(0,255);
 
    foreach($chars as $char)
    {
        $enc[] = ord($char)-$enc[sizeof($enc)-1];
    }
 
    $ret .= join(',',$enc);
    $ret .= '
                ]; for (var i=1; i<t.length; i++) { document.write(String.fromCharCode(t[i]+t[i-1])); }
// ]]></script>';
 
    return $ret;
}
%>