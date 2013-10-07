if (typeof define !== 'function') { var define = require('amdefine')(module) }
define([],function() {
	
	//to generate RLE
	// node genstrokemap.js
	// node strokerle.js 
	// copy from strokestr_packed.j
var bmpRLE="())&&%)&e''(f)h*e+e,g.e/36'++))*+04(j)k*j+p,n-.-k.g/j0i1q2j3f44556e7e88:=)+-.5(()*g,7+../09'',/2'))*+g,,-e.//01.)(e))**+h,g-g.h/g001n23e44567()e**+e,-e./14f5./0'+.8**.0e1=*/'))0+&&*+)e*e++,-e/01124;'-..2'')*+,/11(e)e*p+k,q-r.y/~0r1q2l3l4f5i6e778e9::<=(()++,-17(*l+g,k-j.i/m0i1i2k3i4f5e667;</2,e(+/115()e**+h,,.e/03()h*i+t,m-u*-f.k/y0r1p2h3g44556f7e89==)**+,--/023<'(())*f+,f-f.i//0g1f2e58=(*+-/-/12)*++,,-.f//00())*+e,g-..//1e226'*(f)j*k+m,e-r.q/l0k1n2n3i4g5e6f7889?)'--/2(+.(()e*h+f,h--.h/j0g1f223e447799//13)e**+j,i-g.g/f01f2e3f67)+123*,0')f**+f,h--.e/e0e1228+3)*+e.//123()**++,j--.h/g01e2233467())*))*++**+*h+,,+j,+,h--,,-,g-e,,.-.-.--.-f,.--.e/.h/../.././/.e//.e/k00/0/0/e0e10010e1f01f2122121f2e32i3223435545e455776e7e99>**+e,-e./01224*++,,(e)e*k+h,+j,m--,e--.-g.p/./e00/m0v1p221h2q343h4h5n667e8f:e<<+--./**++,f-e.g/n0g1f2e3f5578*-0))+,-./24:,,--/12)+-,-e.e/22))*h+e,l-l.h/n0n1f2h3k4e5h66799:<)34+--..//112e34)*g+l,i-r.p/./u0{1|2t3223o23k4o5i6m7m88799:f**+f,h-g.f/g-/0h1e22334f679:<)**,e//15)+f,e-../h0g1f223e477:*+--./e013e45,)+g,-.i/f0g1h3g556=-+.23'(()()*)*m+m,k.,f-i.-j.j/.j/./.i/x0y1p2p32f3m43h4p5i6j7h8g9899:e;;=))*e+g,j-h.k/n0s1n2j3m4h5566767e89::=++.1,-.0+,/++-e1458'-)**+g,g-f.j/e10f1e2g3e4e55689+*f+l,h-j.j/h0i1h2h3e4e5667f;)f*f+,+g,-,h-l.j/h0/g0l1f2l3f4433454e56f7:,,--../1e225=*++,,-g.h/f0i1h2e3f4i55669;<-0124/23*e,e--..//0f12e345567:0**+f,h-o.k/q0j1n2n3i445h6e78e9:;;?*,-..0112368<+,,--../001122357+,,-e../001334689@**+g,l-j.j/t0k1o2m3k4k5i7f889::<A+,.14e7;-e./01)*++,g-l.i/i0s1k2i3i434j5i67e8f99;=*,f-e.e/f0j1g223g455678@**+h,j-f.s/k0n1n2m3i4e5i778f99A*+,f-e.i/g0f112e3h4i556679)++,,-f.//0f3456,-i.k/p0n1o2~3p4r5i65m6j5678j9f:f;=>A,--.f/h0h1h2i334i5i6e7789::<<+,f-p.o/l0j1n2t3i4l5h6i7g889f:;f<<>,.-.//012236,-.h/113:(+,f-e.//0e11334568;-e.f/e01g2334559--.i/f0f1g335e78,/e,,-,.001g224e58*--../001g223e4f5790))**+-+n,j-k.o/s0q1g31k2l3k4f5f6e778f9.5,0-.123--.2138+,e--.f/g001j2e3e4i5e7,.33559)+e,g-n.l/t0u101y2p3t4e5z6o7n8j9o:g;e<e=>>?@eAAF+,-f..//0g234556*,e-e.k/k0k1n2l123j4r5g6j7h8e9g:e<?,-.012-/337++,e-e.h/i0f1r2m3h4l5h667f89::;;<>,-.//--.e/f0011223f4e556g8=B.0e12g3f44566776<,e--.s/r0k1n2r3g4g5j6i7i8h9e:.02445:,-//12459+./01e23g4e8<-../02e3356689<<.f//12234556f../i0e1e2l3g445679:02233-0118-e.f/j0h1j2h3f4f5h67f89e:;<,,--.j/q0h1j212q3l4i5g6g77889::;<?/g0f234467:,e-.k/f0g1f2f3g4h5i6f78e99;=>B-.,2701277**+f,,-i.e/g01f2f3f4556;()*e+e,,0,g-g11.h/e0e401g2f34::,,--.g/e0//0h112f3k4f56g8899;;?.-./f0e1i2j3f4h5m6n7k8l9j:h;e<@/e0e1257e?.0016../f0e1i2f3k4i678e9124(()**-**+e,g-i.i/e0h1f2e33234e678-../e0f1223e44567e9<C.//01j2e3f4i5h6g779e::;<>GW9../270e1e3347889;/e0h1h23j4i5i6h7e8h99::;<<==>01f345e6689:0246678:/e01335669//0e1k2f3j4k5l6l7f8h9e;;<./0f1h223g4h5i6e778:;45./e0g1l2i3i4g5j6g7e8g9f:f;==>?8225614e>/001j2i3j4g5k6i7i8j9g:e;e<=>?@E347./112g3h4h556f789:;</0169<//1h22334f5i6f7f889;f<<=@7811239<122335f6679e:;;E/01e2j3m4g5l6t7l8k9m:i;h<e=>>O233778e01h2o3t4l5j6k7m8h9i:k;g<<=>BEF244678;258:<12e3e5689;;1e223f45e6g8e99:;9<27735678:;2337e8e9:<01243445f667e8e:;<e=569;3;;5e68345689::556778>A445667e8899::;e<<==>?@@F977678e<>#t$%h&h'&'g(l)g*e++$%&e'f(*+,-$%&''((*,$e%e&i'(('()f*+,-$e%%&f'g()k**+h,f-.e/0e$%&')*+%&f'h()e+*+e%&'')f*e++,h-//0039%%&f'v(s'(j)n()r()g*q)*q+*w)*)*f+o,m+,n+,n-|.m-.k-.p-../.{/g./x./i./e0j/0r/00/0e10e101k01}2212k12f12k3k223f4f34i345e45466578f98:;%&'e()h*i+e*+,e--.e//0137%&')+,%'f()f*+e,-,-.0035%'h(f)(*+,,--.%''(())*+,,-i.12%(f)g*i+g,e-m.e/g012f334%&e'(e)f*+e.//11%'(g)+,/%e&&'f(g)p*t+w,e+,m-x./.f-.e/.//.0k1g2n3f4688::%&''(f)h*n+m,h+,g-h.i-./g0g10e1g2e12343466%&'j(g)*+e,-../..2%'(..%(f)f*e+,e--.e01e23467%''*+,.-.%&e'f(()('))'+h,,./8%''(f**+e-%&&'(f)*f++,++,e.-00%'f(e)f*f+f,h-f.f/g.0/1e012136A%'e(e))*+e../12%&&'f(e)*+g,g-,035&(}){*f)*j+u,+,+f*+l*,+,s+,s-l,-g,-~.m-.w-.p/.k/.x/u0.e//./g../j0r/00/0e//0h//00/0s/0g1101j/1{021j02g32f32v12i12n332323f23n2e3h4h33434o5k45i6k4667e67h87f8g98989f89::;:;<<?&(g)i*t+k,,-h.g/g0g1f2339=&''(h)u*e)*h+p,q-e,-m,-j,,-n.o,.r/i./v-//./i0/m0/0k/0l//0g/0h/0f101i01f21o01f01k2212n1e2g12201223t4g34g546e56g7f9:;<&'()*g,,-../e010213&'()*+,,&*+,--15668&(e)e++-../01e2&&'g(i)j*h+e*+e,+e,h+,,-f.g//./e0e112123359:&(e)t*i+x*+h**+i*++,*+,v-,~-f,-k,-f,-p,.-e,-f.l--.z,.k/.p-.f/g./q././0/g./r./j0h/0j/00/00/0k.0g1l01m01e01f2e1212m02l3j23g23f4g334k334e564556e7i8879f;:&f'()f*g+k,e-e.e/./010133446679&(f)g*k+q,g-,g-t.m/n0k1l2e12e3446e78&()e*e+,,-e,.e/e12&''(f)e++,e/001&'')*)*+*e+,,//0/0244&''(()*h+i,g-l.f//./112f45568;&')&'(g)n*i))*r+e*+k,h-e,-n,-o.g-.k/{0/u0o//00/0e/0e1121m01k2112n12i3k232232334g34e5456f7f8679789i:;:&%&))*)..2&(('))*,e/1&e'*+,-,e-/&'e(f)e*j+n,m-h,-e.m/./m0i1f01e0112i1223e234e5367&()e++0&'(,/&(f)e*p+h,+f,i-h,--,.n/../g0/0e./0011/100101f2212h123h5667e89<%())**+e,&''()*e+,,-1&'()e/0&'e(()f*g+k,-,e-f.h/g0g1e32133449:&&()++,./0033556<&*e,,--.f/01129&)e*g+k,k-h,-.f/.h/.e/i0g1211212f33446778'&('()(()*e)*e)f**)e*++*+*+)*+*e+*m+*i+*+*++*g+h,+e,+g,+f,++,++,e++,+j,+g,e+,,+e,-,k-,e--,f--,,--,,-,g-,-,-,-,e-,-,e-g,i.-h.--..-g.-i.-i..-.e--.-.e-e..//../../.i/../.f/.././..//.e/.k/f./.e/e.f/e0/e0/k00/e0/0/f0/0/i0/0e/e0/g.//10e10g/10f10/10e101100/010e1/0e10110112121121e01e2022/012122121g2122112122112f1212323221232f332322132232f32e32j32343i23f243e434243e2343e554534434354e54h5e4565465e667e68789::9::<<?'(e)g*e+f,-.f/e0/0f1h2e334549'e(*e+f,e-f.//'&&'(j)x*f)*o+*l+t*+x,++*+k,++*+l,j--,m-,j-,i-,j-e,n--,-i.-f,--,,-y,-i,-k.m/.i/.p/.n//.n/./g0/k./v-//0/e0/g0/e../q0m/0//0i/0j/0g10/00/0e10h10/010n1h/01g0101g/1h221g221i01g2121121221232n112p12j1212f02g3313i13e43f23223322343323e4h54f54434g345l464545e6n7i68e9e89:9:99:f;;<'),/3''))*g++,i-i.k-.g/./f./j0/0f1e3212g3f4f677'*+--/.e//0358;'*--..//01124'(+f,,..//0/123445<'+e,f-h.e-.g//00/01133456656'',./'(()j*k+n*+v,+,j-y.j--.j/q0/m0l//0/0j101o2g11212h323323g22113j424f34e544556565667h8:e;:<'())**+,-.--../g01138')+f,f-f.-.f/g013e47''(i)u*l+y*+r,q-,m+,t+,f-,t-,f+,z-g,--,-m,-n.z-..-.v-.-..-.u-.p/i-//0/s./~.//./u0/0x/0/0n./0e/0m/0h/0/0f/0y1i/1e001{0101j01i01g010101s2212e102h12t112112e12w122112232k3j13k23t23343h223323z4g34e34h34i344342434434e3443344545i45s45f6e56e56566565546g5646f7e6757f677679778e7878878e9f89889:f;;:<;<f=<??'))+*+e,e.-h..-.f/i0f/0f1g2i3343e4e5468'()*+f,+--//10e12235'()*+g,h-e,.j/j0110112g3g4e5668'+,,-..-./e0f1122335:''()**+,1'),e-4'**++,,-k.f/j0h/122123g4f69='(()+'()e**+e,g-i../g001'&(h))(f*(e)(e)n*)i*)h*i+*g)*f)*j+*k+*j+*e,*g+*o+f,+{,+h*+k,*+j*+m-+*+,e+j,p-,j-,g-,t-*,r-,e+-,q-~,,-|.o-.g/.h/-/.{//./g./g./i./h..//./x0/i./z0o/0e/0/0m/0g/0m/00/0k/00100/0e20j/0o101j01k21q21201n0110112101f01k01g21212101m2e12i32e32e12h12k112m42232g12m02f12e3m4323i23i23323g132323e422323e44334e34n334e34g64e534545e4545535545h45h6k466456e56e76g7e67q8e78g78=8899:989e:f;f:<<=>=>>BC''()h*o++,o+,y-l+-f.h--.f-.x-.h/t./w0q//0e10f/10g/0n/00/0i101t01o2i12212h12k3h2432313e4e34434434l3445l6556656e75667767e67578e989899:;;<<?AD''++,e-/124')+-/',.1'+,-0124'+,,/e0g112e6'/'')e*g+j,k-g.g/./l0/0f1h2f3f456g778<>'&(e)g*))*i+*j+,+v,v-n,-f../.f//.e-./.q/g.//..//0/j0//0f/0/001100/0e211201e0112e112h1232323i4f3435546e7f9f:(,-..(('(()f*l+x,j-,-,f+,r-g.f/.-.e-.n-.k/l0/g-//0/q./h0|/00/0f1g01e211211/0110101f2g32e12f112e123433133243e423f23f454g34f34e565575565e446i55757g8898989:;(+--.0369;'*e+i,+,e--.g/g0g1e2e123f4e57(+,..00(,-../e1(()**,,/(h)*f+*+k,p-o.-.i/h./f0h1e223e44566779(+-//11(*g+l,p-g.-f,-q.o/w0t/0j1j0e1101g2g12e121e21223r23f4434h24f5k45h6g5778g998::;;=?A(+,e//())*f+,f.-e,.f/g0e2g3e42445e67789(+--.//01f23457(**+,h-k.i//./0e1f23e4e557(*+h,z-y..-,-f.t-../r0~1101h0101l01e2g12h3g23e23f23434l324i5l6e556g76788789;e<;=(,-//0<(*++,f..//04457(*e+m,p+,n-k.-h,-v.|/e./o./l0j.0~1g0101m01k2h112f1212212i12232e3e23h23l4e34i34m5445f45k6e565656556e767e6778j9e;;('()*e)**+k,+,k-,h-,.,-e.-.-f.--.k/i00/h0g/0n1121i2243323343445e889::',,-./(*g+i,o-v,,-e.p/i./j0y1p212m1223g413l4m5f656g567e99;;()**+f,j--,-j.i/f./e0l101f2i3k434f5e7889(**++,j-i.e/h0e.1g34e5779)++,j-f,-p.v-.u/j./x0i/0h/0h/0/0m1r2m12i02j32l3v23k433443434e54m34i34i5p45e665h6e56f46i7766767i8g789i:9e:g9:;;<;<<==AC)+e,n-q..-.k/g./l0j1l012o3g23h4i35h6g7e97=99<=))**+f,l-r,-o..//.g/q0g//00/0n/0i/0g1j01w2n12y132n3e22323e23h23q433434l3434u5u65545f6f56e56h5667e67g68g78h99:f;<f>>@&()m*u+t,q-k.{/m./m0n1i2f3g6)+,-f./e1134e5e667899:)('+*++,+,-j./e0j1e0112f3e24e54556e9;;)+*,e-,-e.-,--.f-./e0j12g335e6f788),,-i.n/k001j2j3f443445g46677)')-+-,.,-/),g)+,-g.g-/001e223e44556899)*++,-m.m/i0f1i/1e2j3234434e5e67e699)'--+0e11)()f+*s+g,o+,f/,y.-s/-l,-l/.m--.i-.q/y1/l0h/0q/00/0m1f01101j312f12232212j43q232434424l3344645g45667567f898<<:)++/144)*--/e23)-/g13)++,-,.//0103347)+e-./1e22356)/01)+,f-o.l/f0i/001f2i323234f5e6f5766789:;)*+4)-./6;)&'(j)g*)m,)e*g)*l)*t-*v+s*+*+j,+f,+f/+e,f+,,-,g-,y/,,*,w-q,-t,-i,,-e0--.g-.n/.w-.j-./n.//.//./o./j2/h0s/0j/0t/0f/0e/.0s/0e30p1011/1i21e01101121e/1v01q2010101n2s12h132w3212h332323h23l13k1323j23p4e34k34k34n85545k45l4565545f6556u76k7k677667e67f87f98788789989h;;:=:;:;;=@>)++,-f.h/0/001023f445=)*+h,s-f,-h.-.l-.z/h0//0~/e0f1m01s21e01n01g202i12s12e12n12k13e23f23l23h23n4e3434f3434q334l34565i445h45l65g6h556e45656556h467e67767g8868f789f89899:h9;e:;;<=>e),,--./f7;),,--.f/e002f3f;)(*+i,-,-+,g-,,-,e-,,-,-,-,,.--..-s.-.-e.-i..--../.p//.././..0/f0/f0/e0/00/0/00/g10f10i1e0e101010e/0e1o21i012112212g313122332332f3f4f3e433424l34343445e45e65f6g7767f8e9e:99;;:;:<)e,-//0566:<*,--.h/./f001g2f3e234g5f6e567e8899;')*+e,e-.//0122*,,.f-//0//0k1f2g3445567768989:<**,i-t.v-.f/l00/p./t0p1k001l01p2202p3i23g23p23g23g4g334e334f34p5f4e5h45h445f656546568656g76q7g67e67e67j878878g79e889f::9:i;e:;;<<;=<>=>@%'g(n)q*t+y,o-v.v/k0g1h2e6*-.e0124e559:*--.002e457<>?*+-.h/e.0g1f2233443445566*-e../h0i1e223e24e5456;>*,e-f.l/e0/e./m0o1l2w3j4j5i46i7678g9f::;;')e**+o,n-m.f/m001f23f448*.e0e13234*),f-e.j/m0k1h2l3e4556e788:=*,-f.h-.g/m0/n./0x/0h1u220223i233223i23e4434l545q455656x5767f5768h989h::9::;e:<e;<==?>=*-.e/0e112i335e6f78;>*+,,-j.p/k0/r0q1k2y3r4k5g456k7g887889e::='()*e+g,m-j.e/j0h1e233*//0e1e23h45678*-026*&'(h)n*x+v,y-.v/./r./k00/0m1101k202k3f2343324e5e6899*''(-(j)o.)*l)*f+r0+g0+e,,+,q-k+-f2--.3..-..-.m/n00/0m1151l2h334g565667788*,,-i.n/j0m1p2o3323j43g4i5e45f6g7i8e:;f=;=e*+.//7*,./5++,,-p.|/w./|10y/0o/0g1|01h2q12k112x12g12f12j3}223h13|23f23n434434y34g34m34f34h34i5s45545e45j45f35k445e456g56656565656s56t7857i87h6e7e67678787868i78688778f9i889j89:9:f9:8:k9;g<;<g=<<=f>f?f@?())*g+m,z-e.o//0~101t2r3m4m5h67799+*-./268'+,,-e.g/o0k1l2211212f3m4334l3445k6h7e8e789&'()g*j++,k-f.l/g0f13+%''(g)t*u+n,f-,q-s.-.v/h.//0f/0e1f21e213i456+34+-g../j00/10e1e233454545h6568;;?+.e/./h0m1e2f12f3o434j5f65656f7f86778h9e88:;f:;;<=>f@J++//001e2335+/26,+1238:,./i0h/01o2n3f2334j5l45f6656h7788689e89:;;:<@,/112e34e5g6e56e89:;'*,/001,/2346,0011354667e9,.e/f0m1i2k332i3g23m554m5m6i567g8g9e:9::;<<>=)++,f-k.f/i0i12h3f55678:,//001g2233445e6565667f8h9=>'*,e/0011233,8>&,+.-e../g0/0//0/0g1020h1i2112121132k3e23i43f4f54g34f5f45455456656567l99878788:;<<>>A&(())*i+h,j-h.f/g0g1122<,.4,01e3e4e556578:>-//0i1f01o2i12s3u4r5r6k56k56e7767f67f678i778f789879:9k:f9::;e=f>=>>?>@A&()e*f+n,k-h.i/g0f1e24677,./g0e1121e2g332445f6f5667e89889::<-.1259:-/001j2232i3i4i5f356i7h8e9g:e;;<>-123578<;>->@-345567889,/0g1f2334h6676787:e.0f1f2212v3n43o23f4l34s5g45l45545g45g6e5667f67757r67l6778f78g78k7889f89j78989h:99:e;9:l9:;l<;:;<<;e<==<=<>>?AD+-./g0o1q2o3q4r5i6k7f8f9./0g,0f1h2u32f3g23i43r4f34z5n35l65f646p767j67l67f8q78e778q9f89j89e:i89:;9:j9:e;;::;p<;<<;<<;==>e?f@AA(**+e,g-o.k/k0n1j2j3f4f5h99.236778;;3.0e223f4e5g6i7f889:;<?AD.*12f3e44556678@.23.112467:/.223e44;/249/.23g24g5e667i8g99:e<=>?/3460+45e668::;<=/07/1e20055698e9<;<0+4e5j667789f:f?13344569::;;<>G14568:)223456e7e87g478h9e:g;h<;<<??F+-./0f1122443566789eCDS(..49?*489<==23-4,/38>0'(53%&'(()+6420.805/-4++**.4/";
var surRLE="%e&f'h(m)k*j)**+k,i-g.g/h001g22343g43457%%'(()**+f,e--).//112569&&''(()-03%g&f'g(p)o*e++,++,,-h.f//102:$h%%$&e'k(h)g*f+g,h-f.i001f467$%f&'e)*e+./23%e')h*e+g,g-f../0e12'()g*f+i,e-j.l/m0m1102l3p45e68;?@%&e'e(m)h*s+p,|-n.p+.o-.o/g.0010i1u71z012{1232w3f4}5z6t7l8i78g9h:h;<==@@'(()f*h+k,f-i.i/h0e1k2e32f3i4i545e6676778899::;e=&'e()f*g+,e-f.//0f1f3457&'f((&))*h++,i-e../l0i1f3e556ec&'f(l)g*h+g,,-e.e/e0011212335579''(f)i*f+e,g-i./h001f3345e7e89:&'(e)h*k+*+h,r-o.n/k0l1h2j31334i5g6689=%%'j(f)i*l+k,e-h.i/g0f1e223f478%&'e(g)j*g+e,f--.f/112234678;%&'j(j)()f()t*{+o,g-r.{-.j/l01121g2v3t4q5h6e787f8f:;==&'e(e)k*q+o,o-r.l/p0o1r2h3e4i5f6678::<E'(f)e*f+h,h-l.i/e0g1h23f4e7e%'(*g+,i-g//01e456%')g*g+f,o-g../h0e1e2h335566779=A'))*e+,,-1799''(('(()q*i+m-i.h/f0k1e2g4f5g68<=&()g*g+m,l-g.-.h/g0112e>D'f()h*,g-/e0e145f='(i)n*l+o,r-s.i0.i/l0j1v2o3g45i77889:e;@CD&f''(g)j*e+i,k-f../i0i1f22364e66'i(j)j*j+h,m-m.r/l0n1j2f3h4e566889:;;'h(n)f*g+r,j-.-k.f/q0/}0g/f0w2e0o12p12e3w23s23x4|5{6r56f7f8l9n89n:k;o<k=l>>?e>B'e(f)o*v+l,p-r.n/f./k0m1o2e32f3e4g5667e8e='e(k)r*r+y,|-.h/t0i1w2j3q4m5r65q6x7m8h78898i9j:g;i=@AGJ()**+,e-i.f//0/0f101f223e4f5h66779e&(())*e-..0))**+f-.h/0f1f223e45f67:A(e)e*e+e,,-m.k/k0/0g1k2e3f4e556688=6B'e(i')j*t+x,r-y.u/v0s1m2q3k4j56e78899:e;;>'(i)p*+o,r-v.h/v0t2121l/1p21~2i3223z4k5u6s7l8h6889l:e;h<e>fD&'(g)e*j+o,o-h.j/o0p1h2i3m45e6f7h9>'(e)p*m+u,y-h.}/h0~1j2e3u4o5p6m7g8j9j:;>;;<?<e=e>>@G')+j,h-.g/h0f1h2i3e4e5678&''(()f*j+g,l-k.s/l0h1j2l3f4e5g6e8C&&'(i)f*m+j,h-m.h/l0j1g2h3g448899<<&(g)m(*k+p,x-z.|/z0z1n2q3k44556g7f8e9e;<<&()h*g+e,i-h../i002f589'e(p)w*v+n,p-f.g/j0t1x2y3n43t4l5x6j56o7o48m9m::;k<e>>?>>C&'&)g*e+h,g--.e/123e4566799;>@'g(f))*e+,--.//002f34568e'(()++,e-f.g/g02234357(e)r*x+w,g-~../e0w1v2|3t4l5f6m7e8e9f:;f>>(*e+f,g-f./e0e1f23f5678:'e(f)*f+f,,-,-f.e/01f2f459)n*q+w,t-|.n/g0//0x1z2w3q4r5o6o7k8f9g:g;=>>?'(e*)**+,h--.e/&'(()e*,*h+,+g,m-i.h/j0f1h213f4e69>>@&''))*g++,g--./00223458&&'k(k)n*q+p,r-l.t/l0j1n2i3i4h5h6i7i8f9;<?C)f*+e,f-e.f/e0e1g223e45f6f779:=(e)f**+g,-g.l/h0g112g3f45879e<''(()f*p+l,p-y../u01z0112q3q4i5k6g7h889:<>&'(i)y*|+{,g-y.v/s0}1{2o3f4s5q6k7n8p9l:n;j==>e??AB(()f*j+n,s-j.k/n0p1h21k2w3n4g556f7e8e(()f*g+i,q-j.f/g001f2e3458::'e(g)x*w+v,u-|.v//0/e0~1{2m3p23g4q5s6p7w87k8x9v:j;p<f>e?C)*+i,e-k.f/i0g1e2e3g4g7*j+x,t--.g//./|./i0j/001f02y3f4h54m5m6j7m8g99:h<<>>?@)*+e,f-f.h/e0e2j334556788:'*+e,,-f.g/g010e1e2e44567')*+g,,-e.e/l.//0j1g2g3i4g5g6e779)**+e,k-o.k/n0h1h2e3h45h67899:;<=)**,-e//0e23(e)h*)*v+,}-f.v/l0t1q01{2p32v3o234w5v6o7k8g9k:;g<<>?G**+f,h-l.f/e0g1e2g3f445g6677;?F()*g+,j-f.h/o0k1g2j3343h4h5g779:;''(e)k*u+z,s-t.l/~0y10o1y2g32n3g4x3445z65|6z7o678u98x99:v;u<m=k>f?e@AABCCE)*j+p,r-u.p/w0w1x2r3j4j5f6g7e889889f:;<<='(())**+*e+w,e+-o.h/p0f20f1f2j3g4g5h66899::;;''()i*l+v,w-u.s/}0u1k2r3m4i5j667e889:e+e,e-e.p/i0p1j2g3s4f5j6h7788:f;e<>>')*+f,-.f01e33469**+f-e..01f23346779>')g*j+q,j-w.y/f0112w3t4r5s6h7g8g9f:e==?++,f.f013455))**+e,g-/.//0e12244588&'e(m)p*j+x,,-g.q-.g/p./|0~1m21j21o2t32x42f3l4e5445f65e65s6{7l8n9v:x;k<i=i>g??@ADF()l*r+e,y-|.g/z0k.0u1q21~02{32x12~3f4u5t6g7t8i798r99:9m:q;g<e;<f==>f?@?AD''(*f+i,q-f.f/j0h1g2i3f4i5654556e7g8:e;<<**++,--.//0113(+,,--./002e3'(()*+e,f-g.k/j0e1f2e3h4f6679:>??(*e+g,k-h.i/s0l1h2m3i4g5f78*+,--../f0125()e*f+~,{-l.v//0~1x01l2y3p4l556i7g8g9g:e;;<e?'(h)p*f+e*,p-l,-e.{/{0/y0r1p2o3|4p5s6j7f8h9f:f;f<>(,/1')e*n+x,l-g.k/z0e1p2r323o4f556m56k7m8m9g:i;;=<g=?+,g-g.g/i0h21g2332h345e8e99::;==A**+f,i-m.p/q0n1m01h2n3k4j045j667f8i9e:h;<>@(+h,f-/01223345589?()+e,i-.h/h0h1e234e56g899)*++-./122569<:())*j+n,i-{.x/x0|1n2s3l4t5g6j767h8h9e:e;<=g>>?ACDG(()+-,/e0023f59)*k+j,f-f../s01u2y3l4}34}5}6}7r8m9g:j;f<e=e>?@**,,-e.e/f0e1223373))*e+h,r-o.i/o0q1n2i3g4i5f6k7f8e9e::;f<@**+h,i-l.j/j0/e0o1o2i3m4e5k6f7g889e;;<=@D**+g,j-r.o-/m0n1f2n3t4u5e65g6h7m89g::;f:<<=AD))*n+s,t-o.v/e0/e0h/0x112~3u23h4r345m6}7u8o9j89g:i;f<=g>>?@)+,,-h.e/j0f1n2j3f54f5e6i87e:eFG**+,i-k.w/l0t1j2k3g4i5g6f:99::))*h+n,-s.}/f0v1y2e3j4m5u6s7y8m9p:k;g<=f>e??@E'()h*j+x,i-.//0e1u2x3w4q5j6h7g8g9h:f;;<e==(+-./f012e448;()e*f+q,}-|.|/u./i0v1z2q3t4p5x65l6o76g7z8h9f:k;f<f=e@@CF(*f+o,u-{.x/k01z2~3r43q4v5k46h7767787g8p9::;;<;e<=@**++,i-s.o/n0p1o2j334334j645k6e7h8899<:;<<)*+f,t-../w./r0g1n2q3k4v54f5r45t6e7o8v9e:v;v<n=j>i?@@?f@eAABC**+f,j-p.x/../y.0l1o2i3}4z5e6{7j8l9889j:g;g<g=g>>ABD+i,o-p.i/r0z112m32|3j43h4y56m7j867787787q8i98s9u:k;j<;<<==>g??@AB+,-e.f/g0f12e3344),e-e.h/g0f1k2i3i4h5f6f77889:e;;=>B((*(*)(*h+l,o-~.k-.j/k0n/0m1t2p3w4o5m6m7h88:;j=>?e)e+e,h-p.k-.l/o0s1m2o3j4p5r6i7h8h99::;<=>AA+*,p-u.p/w0o101s2z3m23i4l5q6635667f89887789e;**+e,f-h.0142233445::=++)+-.//012g334e9;)+e,e-.e/g0e1m2k3j4j5f65g6f88;;<*+j,g-v.r/e0/s0u1q01l2|3m23j4q5v6m7i8g9e::;<=)+,.e/e001e2e34e67)m*m+q,y-}.x/~0i11001e2q3e4h34k54j34x345|6}7u8i9i:m;g<<=e>?*),-f../f3112124455889@B)*e+,e-m.f/f01e2h3e4f56g7f88;=))+,e--.f//01e2e13g455)e*++,,+,e-j..,.g/h0j1l2l3g23e4k5j6f7767h8e9::;<e=>>AMS*,-k.f/j001j2h3f4e5e6789::=2257:9;<>*+h,i-n.p/f0/k0o1u2y3m23h4m5y6k7g8i9h::<<=>=A,../0247,.h/0e1h2h3g7e<(e)m*t+j,|-s.e/.j/.u/m0x10{1t2h32qA3k53|43p4n34f5p665i65e45x45m6i7{6878h9o:f;z<i?<f=n<>j?fH@@ABNDA+,e-f.p/k0i1p2o3w4l5i6556h7g68i99::=**+k,u-i.w/~0//0/{0x10j1}01s21g2y3l23v4~54u5t6e7n8r9l:r;:i;v<p=i>h=>h?i@fAhBBCe+e,-g.e//0g1h2f123g4e5h6677899:A+f,g-f./i0h12112234e55689(*g+r,f-.-e.h/j0y10u1o2k3m23f43v4u5~6l76q7m87e8o9g:f;f<g=e>@@BDDHH*e+,e-e.e//001j2e3e455678<++,-g.p/n0u1r2x3x4m5l6h7h8f9h;f<h=>?EHO*+,e-f.x/r0i1n2y3r4i34n5m6l7f8f9g::;;<=??@@**+e,-o.t/m0w1n01k2g3{445r6o7}8q98l9~:o;n<j=g>f?h@J**-e.f//0e112h3h4f56j7788<>B,-e../g0f1f2l3g4i5g46j7h889f:e;<<>>@+**,-f.i/l0p1m2r3l4k5i6g7g8f9f:e9;;<e>@G+,--.j/t0n1q2o3m23e4n5g65g6f76g7i889::;>,h-k.x/|0h1x2x3v43h4t556|7r8m9n::9:j;f<<=e+,./e2+,,../e0e1f2g3h4f556g8e99:f*+,i-p.{/|0e1e2q1232j3g4w5z6y7n8j9i:h;;<g>?*++,i-s.f/i0q1{2n3323y4v545o6r56l7o8y9w:p;l<o=h>e?f@eAABH*e,-g.s/q0r1n2p3f43i4m5h6p7h8g9e::<<=,i-n.}/|0|112m3h4g5|6p7x8k9o:m;l<<=f>?>?=>??@ABI++,-37*+--.e//0f1f2f3j4j5g6g7e899;@A**0e23689(f)s*f+i,f-l.i/.p/e./f0o1t2e32s3h4|5x6g76g7r8i9h:g;;<=%''(m)*~+~,f-j.j/.|/{0f1p01y2x3u4u5n6i7f8f9:h=-f.y/{0u1w23~4~5~6{7r8j9j:j;g<<==>e?eBB-..1e2e334e57889.--./f0012e33445f788<A-g.j/}01p223s4f5r6h7j87i8g9l:k;<q=w>m?j<@gAeBCFI++,e-f//0f2123434455**,.n/n0p1i2n3m4i5j6h7g8e9g::;;=?@++,-h.i/~0|1|2g34}5~6r7y8s98e9i:i;k<i;=<==>@CC)e**,,/e002247%'h(f)r*y+y,~-p.h/t0~1f2w3p4k5n6f7h8899::==>>012f3e455779-e.l/p0t1{2w3e4z5o6r7u8n9k:m;g<e=e??CG,--.k/r0r1w2}3i4k54z5y45n6h7e8w9u:k;j<l=k??@gBCCIKS.//0f13345678;<-e.f/j0012f357f=/e0i1n2j3l4i5h6e7h8k99:g;;<==>e??../f0y1z2{3x4f5j6i78r9t:o;h<i=j>?eACCDDEI/0g1n2m3k4o5l6k7j8j9h:f;;<=>e?@@+,,0f234e5667877889e::</001f2k3h4f5f6f7h8e9g:;>D,.f/k0y1e2e3u4i5{6|7x8x9o:t;j<e=h>e@@B116../j0t1r2q3w45k65o6s7m8r9h:e;g<g==>>?FGHQS,,./e001134,01256e78899B+e,+-e.p/u0g1v23o43k4r5}65j6j7w87i8w9s:k;k<=f@AC*e++,--.-..//0112,../01g2i3i445f6676789::;<>-0e1f21122334e5e45e6h7f8g99:=?-./i0i1j21h21h2g3n4y5p6i56z46g7t8y9~:z;n<o=g>f?i@@AABBG*+i,+,i-f.e/h0/h0e225.e/j0r1s2n3p4x5u6k7p8k9n:h;g<f=>>?001k2f3i4g5f667g889:e;;<==>>?B/g0h1t2e3y4y5~6~7{8v9z:m;l<l=i>f?eBC--01e2345578e99:;e?22357889:>?0011223j4g5g6f7g8h9f:l;f<<=g>>??@@AeBBCHH.f/o0y1{2t3x4u5s6l7n8t9e:k;g<=f>>??@BC.0j1n2g3f4x14w5p6q7y8f9q:p;i<x=t>o?o@kAeBBCf/e1f02f3f24468:/e0m1u2r3|4~5s6i7n8y9l:g;:;i<~=x>w?o@kAhBfCeDeFGG,e-.i//0112f7112f3h45e6i7j8g9g:f;e<<=>?00112n3l4q5r6l7k8g9g:k;f<i>??@BFG0g1f2q3i/3h4m5q6r7q8j9q:h;i==>>?eAB-../1,22501e2h3g4e556e77889:e;<B012g34i5f6o7h8h9g:e;e=>B1223h4k5567g8f9:f;=<=?e/01e2j3p4o5k6l7s878{9s:k;s<m=g>h?f@@AACCIL578e:1224h5i6h7g889k::;<<=<=>>?/12e359>334e5f6j7h8f9j:;f<<=>@223e4n5k6j7g67j8e9l:l;h<g=>@@AB233445g6i7f8j99:f;e<g=e>eABC13455667798<e?A4f5e6l7t8y9y:v;r<s=k>o?h@AhBfCfDEfFFGKK136f7f8779f::<>>c385667m8j::;<>e??AD38<e=f>?BDH#o&&'+,-.3',%+),--()**+,--.//0*/12((*./26')f*k+h,j-j.m/l0g1h2g3f4e5e6e78+,-02e6-)/0123*e+-./1()f*e+,e-f.e//001237)*-.0(+-/0056)e**+e,,--.f/e0e233*e++,-e.//01128&),0)**,-17*-.0122457'*-1+,(*++,f-f..//0e112247,-./027'')*++,,--//013(*e+f,l-m3.n/p0p1o2k3i4f5h6e7e9;;*+,-..013(()g*m+j,k-r.p/n0r1m2h3i4h5f67-0970)+,-./1239'()*e+h,e-e.e/e0e1e2e57))*i+f,g-g.m/m0h1k2h3g45f66788:*f+,.e/13448*e++,e-f.e/i0h1g2g3f45e778;)../2234*+--1234/0*e+,,--.0e/f112234669)f*e+h,h-h.i/h0f1i2f3f4e689*,)./01459+*//133(-.f/e123467*../00256),**++,,-h..//001e2e334e568(**,-.1*+-/049)+,,-.//148<)5-24*+--../e001e3455()*i+i,j-l.j/n0n1k2h3k4e5g66778899:<(),,--../013e=,.29)*i+i,k-o.m/m0n1j2l3e4e5h679:.+2+,,--.//0112f3e45588;*++,-/e1e,-1248+e,-e./f012233667**+i,l-n.f/h0k1h2j43h45e8e;2336)*+,,-1.e/0f1e22388;*g+f,k-o.q/s0z1w2r3r4n5i6h7g8f9e::;;<>=+,,../00127;+-./0012334,,--./14--../e0244<11(++,,--//0125+,.01()f*f+h,i-p.m/u0w1n2t3m4m5i6h7e8g99::;(*e+i,m-j.j/s0p1q2k3l4j5g667e99:;<<>*,./f002244H-.+./25-../3+/*,,-e/01e238*+/,,--.f/f0012456)+i,,-k.h/o0r1o2i3l4h556e7f8:;+,0+,,-001229/*.0e)*+,f-f../g0e11223e457884,f-e.//01e22446,,-//001128+,11,,--.//001123445689;@++,e-f.e//0f1f2f3e4g6788@,/,,.012278,e-g.g/h0h112e3h4e5e6e8:**++,e-f.g/l001f2245;5)+,,-f.f/i0e1g2f34557,-../e0e1123f45:+,--.//00112e3469+,-h.f//0h1h2h3j4j5g6678f9:;<?++,,-e.g/f01f2e3f445e6f79e++,,-.e/e0g1k2g3g4f5f6i7e8e9e:<=>'*f++,f-h../e001f22348012236+,-.e00123568+.f//02e34e55799,-./e00122334559--0125.//0235+-//0e1123f44556?01+e,f--.e/f0e1h2h3f4e5566789:A-/015/25=01175=+00369,1224579e3))**+g,j-k.s/s0q/0g1t2w3j4r5r6i7f8f9e:;e==,,-//14+,,-g.i/l0g1j2g3i4f5g6f7e889@-.4./25:,e-e.g/0i112e3h4e55679::.3-/01123357<<,,-0240033--../f001e223g4e5f6e778:;e=?())*h+g,f-f.h/f0011234,.225+.113-034,-e..//01e223e445699:,,./035/025./001e2e33455-.e/e0g1e2g3g4e5f6e7f88:00144567-.//1e2334455678D*e+,e--./f0-122346/007')**+e,-g.j/i0f1h2i34f557f8())**+,e-e..//0e22345e7?-001e245668:/./146.f/g0h1j2k3l4j5i6g7m8i9g::;e<e=>*+,g-e.h/e0j1g2f334g5568:;02,.//0g2f3e468<)*e+,--.00114()**+e,e--.j//0f1f52/15-.//00112233445667f899;;@.003618<123581122789-047;+-/11301578<013345567789;,-../f001e2348014556e99:;+./044/01f24f566799)**+e,,-e../g00223713467;22457789@01f35f6e7g9:;>)**++,,-e.e//0e11238255/23.00123445568128?.02344801223g4j5f6f7e8g9i:h;g<<=?AC.e/e0f-1h2e3h4f5667789:/2f3g4f5g6j7e8f9:g;<=A,g-h.h/g0h1i223f445645730245:6./12446277836<4291<589>/11233458:2/@#m&)*1&)(++-.0,e.,0*+,*--),12459/13)*-3*,,-e/12212)),-..,*+,/015.0,,--//+--112e34502()-.0e236-.1,+.+-/12,.-2-+,0-.-.3.0*9*.2e425,-./4,+1/,,-.e00123724//:9)*--/6,14(//3*-.0,15*+,,--.f/01126+.20-+,-+138;/046.39,2560;3?";

var unpackrle=function(s) {
	var prev='';
	var output="";
	for (var i=0;i<s.length;i++) {
		var ch=s.charCodeAt(i);
		if (ch>0x63) {
			repeat=ch-0x63;
			for (var j=0;j<repeat;j++) output+=prev;
		} else {
			prev=s[i];
			output+=prev;			
		}
	}
	return output;
}
var bmpstroke=unpackrle(bmpRLE); bmpRLE=null;
var surstroke=unpackrle(surRLE); surRLE=null;

/*
TODO SINICA Parts stroke count
*/
var sinicaeudc ={};
var  getutf32 = function (ch) {
	var ic = ch.charCodeAt(0);
	var c = 1; // default BMP one widechar
	if (ic >= 0xd800 && ic <= 0xdcff) {
	  var ic2 = ch.charCodeAt(1);
	  ic = 0x10000 + ((ic & 0x3ff) * 1024) + (ic2 & 0x3ff);
	  c++; // surrogate pair
	}
	return ic;
  };

var chwithstrokecount=function(n) {
	var output=[];
	var extensionb=false;
	if (n<0) extensionb=true;

	if (extensionb) {
		n=-n;
		for (var i=0;i< surstroke.length;i++ ) {
			if (surstroke.charCodeAt(i)-0x23 == n) 
				output.push( i+0x20000);
		}
	} else {
		for (var i=0;i<bmpstroke.length;i++) {
			if (bmpstroke.charCodeAt(i)-0x23 == n) 
				output.push( i+0x3400);
		}		
	}

	return output;
}
var strokecount=function(ch) {
	code=parseInt(ch,10);
	if ( isNaN(code)) {
		var code=getutf32(ch);
	}
	
	if (code>=0x20000 && code<=0x2B81F) { //up to extension D
		return surstroke.charCodeAt(code-0x20000)-0x23 || 0;
	} else if (code<0x20000) {
		return bmpstroke.charCodeAt(code-0x3400)-0x23 || 0;
	} else {
		return eudc(ch) || 0 ;
	}
};
strokecount.withstroke=chwithstrokecount;
return strokecount;
});