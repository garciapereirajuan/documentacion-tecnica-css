/*eslint no-inline-comments: ["error", { "ignorePattern": "something" }] */

import { useEffect } from 'react';
import initialScript from './initialScript';
import "./styles.css";

const Content = () => {
    useEffect(()=>{
        window.scroll(0,0);
        initialScript("start");
        return(()=>{
            initialScript("destroy");
        });
    });
   
    return(
        <div className="stylesDocumentacionTecnica">
            <section id="container" className="style_container_none">
                <div id="parte_superior">
                    <div id="btn_indice">Índice</div>
                </div>  
                    {/* <!--Posicion de Nav class= para disp GRANDES: izquierda. Siempre visible--> */}
                <nav id="navbar">
                    <header>Lenguaje CSS</header>
                    <ul>
                        <li>
                            <dl>
                                <dt>
                                    <a className="nav-link" href="#que_es_css">Que es CSS</a>
                                </dt>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><a className="nav-link" href="#css_a_fondo">CSS a fondo</a></dt>
                                <dd><a className="sub-link" href="#siglas_css">Siglas CSS</a></dd>
                                <dd><a className="sub-link" href="#estilos_en_cascada">Estilos en cascada</a></dd>
                                <dd><a className="sub-link" href="#ventajas_de_css">Ventajas de CSS</a></dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><a className="nav-link" href="#como_usar_css">Como usar CSS</a></dt>
                                <dd><a className="sub-link" href="#formas_de_uso">Formas de uso</a></dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><a className="nav-link" href="#como_se_estructura_css">Como se estructura CSS</a></dt>
                                <dd><a className="sub-link" href="#sintaxis_css">Sintaxis CSS</a></dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><a className="nav-link" href="#prefijos_css">Prefijos CSS</a></dt>
                                <dd><a className="sub-link" href="#prefijos_por_navegador">Prefijos por navegador</a></dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><a className="nav-link" href="#herencia_en_css">Herencia en CSS</a></dt>
                                <dd><a className="sub-link" href="#concepto_de_herencia">Concepto de herencia</a></dd>
                                <dd><a className="sub-link" href="#valores_especiales">Valores especiales</a></dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><a className="nav-link" href="#variables_en_css">Variables en CSS</a></dt>
                                <dd><a className="sub-link" href="#css_custom_properties">CSS Custom Properties</a></dd>
                                <dd><a className="sub-link" href="#definir_una_variable_css">Definir una variable CSS</a></dd>
                                <dd><a className="sub-link" href="#utilizar_una_variable_css">Utilizar una variable CSS</a></dd>
                            </dl>
                        </li>
                    </ul>
                </nav>
                <header id="header">
                    <h1>Lenguaje CSS</h1>
                </header>
                <main id="main-doc">
                        {/* <!--Minimo 5 section-->
                        <!--En total debe haber minimo 10 <p>-->
                        <!--En total debe haber minimo 5 <code>-->
                        <!--En total debe haber minimo 5 <li>--> */}
                    <section className="main-section" id="que_es_css">
                        <header>Que es CSS</header>
                        <p>Antes de comenzar, debes tener claro un concepto clave: una página web es realmente <strong>un documento de texto</strong>. En dicho documento se escribe <strong>código HTML</strong>, con el que se que crea el contenido de una web. Por otro lado, existe el <strong>código CSS</strong>, que unido al código HTML permite darle forma, color, posición (<em>y otras características visuales</em>) a una página.</p>
                        <p>CSS es una tecnología utilizada para doctar de <strong>cualidades visuales y estéticas</strong> a una página web. Si nunca has tocado esta materia, comprobarás que se trata de una forma analítica, lógica y casi matemática de crear páginas web, pero gracias a ella podemos simplificar la creación de páginas y conseguir exactamente lo que buscamos.</p>
                        <p>En resumen, se trata de un idioma como podría ser el inglés o el alemán, que los navegadores web como Chrome o Firefox conocen y pueden entender. Nuestro objetivo como diseñadores y programadores web es precisamente ese: aprender el idioma.</p>
                    </section>
                    <section className="main-section" id="css_a_fondo">
                        <header>CSS a fondo</header>
                        <h3 id="siglas_css">Siglas CSS</h3>
                        <p>Las siglas CSS (<em>Cascading Style Sheets</em>) significan «Hojas de estilo en cascada» y parten de un concepto simple pero muy potente: aplicar estilos (<em>colores, formas, márgenes, etc...</em>) a uno o varios documentos (<em>generalmente documentos HTML, páginas webs</em>) de forma masiva.</p>
                        <p>La idea de CSS es la de utilizar el concepto de <strong>separación de presentación y contenido</strong>, intentando que los documentos HTML incluyan sólo información y datos, relativos al significado de la información a transmitir (<em>el contenido</em>), y todos los aspectos relacionados con el estilo (<em>diseño, colores, formas, etc...</em>) se encuentren en un documento CSS independiente (<em>la presentación</em>).</p>
                        <h3 id="estilos_en_cascada">Estilos en cascada</h3>
                        <p>Se le denomina <strong>estilos en cascada</strong> porque se aplican de arriba a abajo (<em>siguiendo un patrón denominado herencia que trataremos más adelante</em>) y en el caso de existir ambigüedad, se siguen una serie de normas para resolverla.</p>
                        <h3 id="ventajas_de_css">Ventajas de CSS</h3>
                        <p>De esta forma, se puede unificar todo lo relativo al diseño visual en <strong>un solo documento CSS</strong>, y con ello, varias ventajas:</p>
                        <ul>
                            <li>Si necesitamos hacer modificaciones visuales lo hacemos en un sólo lugar y no tenemos que editar todos los documentos HTML en cuestión por separado.</li>

                            <li>Se reduce la duplicación de estilos en diferentes lugares, por lo que es más fácil de organizar y hacer cambios. Además, al final la información a transmitir es considerablemente menor (las páginas se descargan más rápido).</li>

                            <li>Es más fácil crear versiones diferentes de presentación para otros tipos de dispositivos: tablets, smartphones o dispositivos móviles, etc...</li>
                        </ul>
                    </section>
                    <section className="main-section" id="como_usar_css">
                        <header>Como usar CSS</header>
                        <p>Antes de comenzar a trabajar con <strong>CSS</strong> hay que conocer las diferentes formas para incluir estilos en nuestros <strong>documentos HTML</strong>, ya que hay varias, cada una con sus particularidades y diferencias.</p>
                        <h3 id="formas_de_uso">Formas de uso</h3>
                        <ul>
                            <li>
                                <dl>
                                    <dt className="sp-dt"><strong>CSS externo</strong>: utilizamos la etiqueta <code>&lt;link&gt;</code></dt>
                                    <dd>En la cabecera de nuestro documento HTML, más concretamente en el bloque <code><head></head></code>, podemos incluir una etiqueta <code>&lt;link&gt;</code> con la que establecemos una relación entre el documento actual y el archivo CSS que indicamos en el atributo href:</dd>
                                </dl>
                            </li>
                        </ul>
                        <pre className="pre-codigo">
                            <code className="rect-codigo">
                                &lt;<span className="tag-html">link</span> <span className="atrib-html">rel</span>="stylesheet" <span className="atrib-html">href</span>="index.css" &gt;
                            </code>
                        </pre>
                        <ul>
                            <li>
                                <dl>
                                    <dt className="sp-dt"><strong>CSS interno</strong>: utilizamos la etiqueta <code>&lt;style&gt;</code></dt>
                                    <dd>Otra de las formas habituales que existen para incluir estilos CSS en nuestra página es la de añadirlos directamente en el documento HTML, a través de una etiqueta <code>&lt;style&gt;</code> que contendrá el código CSS:</dd>

                                </dl>
                            </li>
                        </ul>
                        <pre className="pre-codigo">
                            <code className="rect-codigo">
                                &lt;<span className="tag-html">style</span>&gt;
                                <br/><span className="tag">   div</span>{"{"}
                                <br/><span className="atrib">     background</span>: <span className="val">hotpink</span>;
                                <br/><span className="atrib">     color</span>: <span className="val">white</span>;
                                <br/>   {"}"}
                                <br/>&lt;<span className="tag-html">/style</span>&gt;
                            </code>
                        </pre>
                        <ul>
                            <li>
                                <dl>
                                    <dt className="sp-dt"><strong>CSS en línea</strong>: utilizamos el atributo <code>style</code></dt>
                                    <dd>Por último, la tercera forma de aplicar estilos en un documento HTML es hacerlo directamente, a través del atributo <code>style</code> de la propia etiqueta donde queramos aplicar el estilo:</dd>
                                </dl>
                            </li>
                        </ul>
                        <pre className="pre-codigo">
                            <code className="rect-codigo">
                                &lt;<span className="tag-html">p</span>&gt;¡Hola &lt;<span className="tag-html">span</span> <span className="atrib-html">style</span>="color:red"&gt;amigo lector&lt;/<span className="tag-html">span</span>&gt;!&lt;/<span className="tag-html">p</span>&gt;   
                            </code>
                        </pre>
                    </section>
                    <section className="main-section" id="como_se_estructura_css">
                        <header>Como se estructura CSS</header>
                        <p>Al igual que los documentos HTML, los documentos CSS son archivos de texto donde se escribe una serie de órdenes y el cliente (navegador) las interpreta y aplica a los documentos HTML asociados.</p>
                        <h3 id="sintaxis_css">Sintaxis CSS</h3>
                        <p>La <strong>estructura CSS</strong> se basa en reglas que tienen el siguiente formato:</p>
                        <div className="sintaxis">
                            <pre className="pre-codigo">
                                <code>
                                    <span className="tag">selector</span> {"{"} 
                                    <br/><span className="atrib">   propiedad</span> : <span className="val">valor</span>;
                                    <br/>{"}"}
                                </code>
                            </pre>  
                        </div>
                        <ul>
                            <li><strong>Selector</strong>: El selector es el elemento HTML que vamos a seleccionar del documento para aplicarle un estilo concreto. Por ejemplo, <em>el elemento <strong>p</strong></em>. Realmente, esto es mucho más complejo, pero ya dedicaremos una serie de capítulos exclusivamente a este tema.</li>
                            <li><strong>Propiedad</strong>: La propiedad es una de las diferentes características que brinda el lenguaje CSS e iremos aprendiendo.</li>
                            <li><strong>Valor</strong>: Cada propiedad CSS tiene una serie de valores concretos, con los que tendrá uno u otro comportamiento.</li>
                        </ul>
                    </section>
                    <section className="main-section" id="prefijos_css">
                        <header>Prefijos CSS</header>
                        <p>El <strong>lenguaje CSS</strong> es una especificación desarrollada y mantenida por el World Wide Web Consortium (W3C), una comunidad internacional que se encarga de desarrollar estándares para asegurar el crecimiento y la neutralidad de la web, independizándolo de tecnologías propietarias e intentando aunar esfuerzos para satisfacer la demanda de características útiles e interesantes. </p>
                        <p>En el <strong>W3C</strong> participan y colaboran practicamente todas las empresas relacionadas con Internet, como por ejemplo Apple, Adobe, Akamai, Cisco, Google, Facebook, HP, Intel, LG, Microsoft, Nokia, Twitter, Yahoo, entre muchos otros.</p>
                        <h3 id="prefijos_por_navegador">Prefijos por navegador</h3>
                        <p>Algunas de las propiedades que veremos no están definidas por completo, sólo son borradores o pueden variar en la especificación definitiva, por lo que los navegadores las implementan utilizando una serie de <strong>prefijos por navegador</strong>, que facilitan la segmentación de funcionalidades.</p>
                        <p>De esta forma, podemos utilizar varios prefijos para asegurarnos que aunque dichas funcionalidades tengan un comportamiento o sintaxis diferente en cada navegador, podemos hacer referencia a cada una de ellas por separado:</p>
                        <pre className="pre-codigo">
                            <code className="rect-codigo">
                                <span className="tag">div</span> {"{"}
                                <br/><span className="atrib">   transform</span>: ...<span className="coment">{"/* Navegadores que implementan especificación oficial */"}</span>
                                <br/><span className="atrib">   -webkit-transform</span>: ...<span className="coment">{"/* Versiones antiguas de Chrome (Motor WebKit) */"}</span>
                                <br/><span className="atrib">   -moz-transform</span>: ...<span className="coment">{"/* Versiones antiguas de Firefox (Motor Gecko) */"}</span>
                                <br/><span className="atrib">   -ms-transform</span>: ...<span className="coment">{"/* Versiones antiguas de IE (Motor Trident) */"}</span>
                                <br/><span className="atrib">   -o-transform</span>: ...<span className="coment">{"/* Versiones antiguas de Opera (Motor Presto) */"}</span>
                                <br/>{"}"}   
                            </code>
                        </pre>
                    </section>
                    <section className="main-section" id="herencia_en_css">
                        <header>Herencia en CSS</header>
                        <p>Otro detalle que hay que dejar claro antes de empezar es el concepto de <strong>herencia</strong> (<em>y el concepto de <strong>cascada</strong>, que veremos más adelante</em>), pues son los que más problemas suelen dar y los que, sin lugar a dudas, mayor frustración acarrean cuando no comprendemos lo que está pasando.</p>
                        <h3 id="concepto_de_herencia">Concepto de herencia</h3>
                        <p>En primer lugar, debemos saber que algunas propiedades CSS se <strong>heredan</strong> desde los elementos padres a los elementos hijos, modificando el valor que tienen por defecto:</p>
                        <pre className="pre-codigo">
                            <code className="rect-codigo">
                                <span className="tag">body</span> {"{"}
                                <br/><span className="atrib">   color</span>: <span className="val">green</span>;    <span className="coment">{"/* Color de texto verde */"}</span>
                                <br/>{"}"}
                            </code>
                        </pre>
                        <p>Si tenemos más etiquetas dentro de <code>&lt;body&gt;</code>, como por ejemplo una etiqueta <code>&lt;div&gt;</code> con texto en su interior, si no tenemos aplicada una propiedad color a dicho elemento, veremos que también aparece en color verde. Esto ocurre porque la <strong>propiedad color</strong> es una de las propiedades CSS que, en el caso de no tener valor específico, <strong>hereda el valor de su elemento padre</strong>.</p>
                        <p>Esto <strong>no ocurre</strong> si lo hacemos con otras propiedades CSS, como por ejemplo, con <strong>los bordes</strong> de un elemento HTML:</p>
                        <pre className="pre-codigo">
                            <code className="rect-codigo">
                                <span className="tag">body</span> {"{"}
                                <br/><span className="atrib">   border-width</span>: <span className="val">2px</span>;
                                <br/><span className="atrib">   border-style</span>: <span className="val">solid</span>;
                                <br/><span className="atrib">   border-color</span>: <span className="val">red</span>;
                                <br/>{"}"}
                            </code>
                        </pre>    
                        <h3 id="valores_especiales">Valores especiales</h3>
                        <p>Además de los valores habituales de cada propiedad CSS, también podemos aplicar ciertos <strong>valores especiales</strong> que son <strong>comunes</strong> a todas las propiedades existentes. Con estos valores modificamos el comportamiento de la herencia en dicha propiedad:</p>
                        <ul>
                            <li><strong>inherit</strong>: Hereda el valor de la propiedad del elemento padre.</li>
                            <li><strong>initial</strong>: Establece el valor que tenía la propiedad inicialmente.</li>
                            <li><strong>unset</strong>: Combinación de las dos anteriores: Hereda el valor de la propiedad del elemento padre, y en caso de no existir, su valor inicial.</li>
                        </ul>
                        <p>Veamos, por ejemplo, el siguiente ejemplo para forzar la herencia en una propiedad que no la aplica por defecto:</p>
                        <pre className="pre-codigo">
                            <code className="rect-codigo">
                                <span className="tag">body</span> {"{"}
                                <br/><span className="atrib">   border-width</span>: <span className="val">2px</span>;
                                <br/><span className="atrib">   border-style</span>: <span className="val">solid</span>;
                                <br/><span className="atrib">   border-color</span>: <span className="val">red</span>;
                                <br/>{"}"}
                                <br/>
                                <br/><span className="tag">div</span> {"{"}
                                <br/><span className="atrib">   border</span>: <span className="val">inherit</span>;
                                <br/>{"}"}
                            </code>
                        </pre>
                        <p>Si tenemos un elemento <code>&lt;div&gt;</code> dentro del <code>&lt;body&gt;</code>, el primero heredará los estilos del elemento <code>&lt;body&gt;</code>, ya que le hemos especificado el valor <strong>inherit</strong> en la propiedad <strong>border</strong>.</p>
                    </section>
                    <section className="main-section" id="variables_en_css">
                        <header>Variables en CSS</header>
                        <p>Quizás lo desconozcas, ya que es una característica moderna que no estaba presente en las primeras versiones de CSS, pero existe una forma nativa de guardar valores a través de <strong>«variables CSS»</strong>. Estas variables CSS no existían hace años, y de hecho, fue una de las razones por las que se popularizaron preprocesadores como <strong>LESS</strong> o <strong>Sass</strong>, que sí las incorporaban.</p>
                        <p>Sin embargo, las denominadas <strong>variables CSS</strong> realmente no son variables, sino que solemos denominarlas así por su parecido con la programación y porque es más fácil comprender rápidamente lo que son, pero tienen sus diferencias. La forma oficial de llamarlas es <strong>custom properties</strong> (<em>propiedades personalizadas</em>).</p>
                        <h3 id="css_custom_properties">CSS Custom Properties (<em>Tambien conociadas como <strong>variables CSS</strong></em>) </h3>
                        <p>Las <strong>CSS Custom Properties</strong> (<em>muchas veces conocidas por variables CSS</em>) son un mecanismo de CSS que permite dar <strong>un valor personalizado</strong> a las propiedades. El objetivo principal suele ser evitar escribir múltiples veces ese valor, y en su lugar, ponerle un nombre más lógico y fácil de recordar, que hará referencia al valor real.</p>
                        <p>De esta forma, si necesitamos cambiar el valor en algún momento, podemos hacerlo en esa <strong>propiedad personalizada</strong> y no en múltiples partes del documento, donde nos podríamos equivocar al añadir el mismo valor o incluso hacer mucho más difícil de mantener el código.</p>
                        <h3 id="definir_una_variable_css">Definir una variable CSS</h3>
                        <p>Para definir una <strong>custom property</strong> haremos uso de los dos guiones <code>--</code> previos al nombre que queramos utilizar. Además, debemos fijarnos en el elemento que definimos la variable, en este ejemplo la pseudoclase <code>:root</code>:</p>
                        <pre className="pre-codigo">    
                            <code className="rect-codigo">
                                <span className="element-root">:root</span> {"{"}
                                <br/><span className="variab">  --background-color</span>: black;
                                <br/>{"}"}             
                            </code>
                        </pre>
                        <h3 id="utilizar_una_variable_css">Utilizar una variable CSS CSS</h3>
                        <p>A la hora de utilizar una <strong>custom property</strong>, hay que utilizarla dentro de la expresión <code>var()</code>:</p>
                        <pre className="pre-codigo">
                            <code className="rect-codigo">
                                <span className="element-class">.element</span> {"{"}
                                <br/><span className="atrib">   background</span>: <span className="atrib">var</span>(<span className="variab">--background-color</span>);
                                <br/>{"}"}
                            </code>
                        </pre>               
                    </section>
                </main>
            </section>
        </div>
    );
}

export default Content;