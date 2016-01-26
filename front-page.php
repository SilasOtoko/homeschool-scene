<!--
Template name: Front Page
-->
<?php get_header(); ?>
<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ end header -->

<!-- Main content's .container -->
<div class="skeletor-docs-header">
	<div class="skeletor-docs-logo">
		<div class="container">
			<a id="skeletor-mega-logo" href="/">Birdpress Theme</a>
			<link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:900' rel='stylesheet' type='text/css'>
			<code class="aligncenter t-center"><span class="like-h4 subtitle" style="line-height:normal;">How it&rsquo;s done, <span style="color:#f00;">f00</span>. <span style="color:#888;">// Under construction, and all that.</span></span></code>
		</div>
	</div>
</div>


<!-- Main content's .container -->
<div class="container">


<?php /*
<div id="content" class="row">

	<!-- <aside class="main-sidebar col-xs-12 col-md-3" role="complimentary">
		<?php // get_sidebar(); ?>
	</aside> -->

	<section class="main-content-column col-xs-12 col-md-9">
		<?php the_post(); ?>
		<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
			<!-- <h1 class="entry-title"><?php the_title(); ?></h1> -->
			<div class="entry-content">
				<?php
				if ( has_post_thumbnail() ) {
					the_post_thumbnail();
				}
				?>
				<?php the_content(); ?>
				<?php edit_post_link( __( 'Edit', 'blankslate' ), '<div class="edit-link">', '</div>' ) ?>
			</div>
		</div>
	</section>
</div>
*/ ?>

<div class="row">

	<section class="docs-blocks col-xs-12">

		<article id="docs-index" class="docs-block">
			<h1>Component Demos</h1>
			<h2 class="like-h3">Indexeth</h2>
			<ol>
				<li><a href="#docs-headings">Headings</a></li>
				<li><a href="#docs-body-copy">Body Copy</a></li>
				<li><a href="#docs-lists">Lists</a></li>
				<li><a href="#docs-images">Images in Content</a></li>
				<li><a href="#docs-buttons">Buttons</a></li>
				<li><a href="#docs-blockquotes">Blockquotes</a></li>
				<li><a href="#docs-tables">(Responsive) Tables</a></li>
				<li><a href="#docs-alerts">Alerts</a></li>
				<li><a href="#docs-modals">Modals</a></li>
				<!-- <li><a href="#docs-carousels">Carousels</a></li> -->
				<li><a href="#docs-video-embeds">Video embeds</a></li>
				<li><a href="#docs-star-ratings">Star Ratings</a></li>
			</ol>
		</article>


		<article id="docs-headings" class="docs-block">
			<h2 class="docs-block--title">Sample Heading sizes</h2>

			<h1>h1 Heading Lorem Ipsum Dolor</h1>
			<h2>h2 Heading Lorem Ipsum Dolor</h2>
			<h3>h3 Heading Lorem Ipsum Dolor</h3>
			<h4>h4 Heading Lorem Ipsum Dolor</h4>
			<h5>h5 Heading Lorem Ipsum Dolor</h5>
			<h6>h6 Heading Lorem Ipsum Dolor</h6>

		</article>

		<article id="docs-body-copy" class="docs-block">
			<h2 class="docs-block--title">Sample Body Copy</h2>

			<p>Paragraph copy Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae voluptatem quia quam eum. <strong>Expedita saepe unde</strong> facere dolorum eum, minus.</p>
			<p>Paragraph copy Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sapiente nemo consectetur dolore accusantium, maxime numquam dolorum ducimus error veniam officia, <em>animi, atque rem obcaecati perspiciatis</em> aliquid molestias laborum dolor porro odit nesciunt possimus, iure eum ullam! Ipsa, debitis alias!</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates delectus neque quaerat quo quis deleniti, doloremque repellendus. Rem ratione quia maxime est temporibus consectetur sit hic, vitae laudantium quos fugit voluptate, repellendus earum corporis quo. Rerum magnam, dolore ut ullam ipsam, nemo. Cum illum tempora temporibus cumque voluptatibus <a href="#/">excepturi inventore</a> expedita debitis quibusdam quia ex<sup><a class="footnote-link" id="footnote-link-1" href="#footnote-1">1</a></sup>, recusandae totam voluptas vitae quod culpa doloremque molestias quisquam laboriosam! Cum neque consequatur aperiam ex, facere dicta quos atque porro.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit<sup><a class="footnote-link" id="footnote-link-2" href="#footnote-2">2</a></sup>. Itaque quae tempore nisi, nostrum maiores omnis, ipsa cumque labore nesciunt quidem.</p>

			<section class="footnotes-block">
				<div class="footnote" id="footnote-1">
					<p><sup>1</sup> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, maxime. <a href="#footnote-link-1" class="footnote-back-link" title="Jump back to footnote 1 in the text.">↩︎</a></p>
				</div>
				<div class="footnote" id="footnote-2">
					<p><sup>2</sup> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet accusantium excepturi iste dolore repellat eligendi expedita temporibus incidunt voluptas. Ipsum deserunt natus voluptatibus aspernatur, autem voluptas quasi minus! Animi, commodi neque error atque, placeat ipsam. <a href="#footnote-link-2" class="footnote-back-link" title="Jump back to footnote 2 in the text.">↩︎</a></p>
				</div>
			</section>

		</article>


		<article id="docs-lists" class="docs-block">
			<h2 class="docs-block--title">Sample Lists</h2>

			<h3>Unordered List</h3>
			<ul>
				<li>List item 1</li>
				<li>List item 2</li>
				<li>
					List item 3
					<ul>
						<li>Child list item 1</li>
						<li>Child list item 2</li>
						<li>Child list item 3</li>
					</ul>
				</li>
				<li>List item 4</li>
				<li>List item 5</li>
			</ul>

			<h3>Ordered List</h3>
			<ol>
				<li>List item</li>
				<li>List item</li>
				<li>
					List item
					<ol>
						<li>Child list item</li>
						<li>Child list item</li>
						<li>Child list item</li>
					</ol>
				</li>
				<li>List item</li>
				<li>List item</li>
			</ol>

		</article>


		<article id="docs-images" class="docs-block">
			<h2 class="docs-block--title">Sample Images in Content ("Feature Figure")</h2>

			<!-- Figure Feature (Full Width / Default) -->
			<figure class="figure-feature">
				<img class="img-responsive" src="/images/misc/placeholdit-800x500.png">
				<figcaption>
					Photo caption, if desired, goes here.
				</figcaption>
			</figure>

			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel illum quod error adipisci voluptates architecto ducimus laudantium ipsa iusto. Doloribus facere neque reiciendis numquam! Inventore voluptate illum quidem earum temporibus, repudiandae velit quo consectetur corporis hic voluptas, ducimus provident quis commodi ab soluta fugiat dignissimos nihil officia porro eum molestiae.</p>

			<!-- Figure Feature (Right) -->
			<figure class="figure-feature figure-feature__right col-xs-12 col-sm-6 col-lg-7">
				<img class="img-responsive" src="/images/misc/placeholdit-600x400.png">
				<figcaption>
					Photo caption, if desired, goes here.
				</figcaption>
			</figure>

			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel illum quod error adipisci voluptates architecto ducimus laudantium ipsa iusto. Doloribus facere neque reiciendis numquam! Inventore voluptate illum quidem earum temporibus, repudiandae velit quo consectetur corporis hic voluptas, ducimus provident quis commodi ab soluta fugiat dignissimos nihil officia porro eum molestiae.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus fugit doloremque unde voluptatum saepe dolore modi deserunt quibusdam nobis veniam corporis accusantium magni dolor magnam ad est repellendus eaque tenetur numquam debitis veritatis excepturi quasi, cupiditate, sapiente nemo! Deserunt itaque culpa eum officia libero quis qui laboriosam ipsum quibusdam! Necessitatibus iste inventore nisi, omnis, veniam magnam rem optio similique ad.</p>

			<!-- Figure Feature (Left) -->
			<figure class="figure-feature figure-feature__left col-xs-12 col-sm-6 col-lg-7">
				<img class="img-responsive" src="/images/misc/placeholdit-600x400.png">
				<figcaption>
					Photo caption, if desired, goes here.
				</figcaption>
			</figure>

			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel illum quod error adipisci voluptates architecto ducimus laudantium ipsa iusto. Doloribus facere neque reiciendis numquam! Inventore voluptate illum quidem earum temporibus, repudiandae velit quo consectetur corporis hic voluptas, ducimus provident quis commodi ab soluta fugiat dignissimos nihil officia porro eum molestiae.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam natus quam aut dolores, quaerat illo dolore tempora in voluptate, ut, dolorem blanditiis odit, veniam! Quisquam voluptatem atque dolores necessitatibus et repellendus reiciendis, maiores impedit ea pariatur illo, explicabo a fugit, molestiae non eos, fuga. Vel at expedita eaque, quaerat, error earum possimus eligendi quis quasi nam unde magni asperiores voluptatem!</p>

			<!-- Figure Feature (Centered) -->
			<figure class="figure-feature figure-feature__centered">
				<img class="img-responsive" src="/images/misc/placeholdit-600x400.png">
				<figcaption>
					Photo caption, if desired, goes here.
				</figcaption>
			</figure>

			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum quod, delectus culpa placeat esse laboriosam facilis cum praesentium modi, ratione similique officia nostrum dolore molestiae voluptatem velit maiores enim, rem provident accusantium repellat amet, ullam excepturi. Reprehenderit quo ea, nisi voluptate fugiat delectus facilis illum. Corporis explicabo iste, amet! Eum.</p>

		</article>


		<article id="docs-buttons" class="docs-block">
			<h2 class="docs-block--title">Sample button sizes &amp; types</h2>

			<h3>Button size &amp; color classes</h3>

			<div class="row">
				<div class="col-xs-12 col-sm-6">
					<h4>Default</h4>
					<p><a class="button button-smallest" href="#/">button text</a></p>
					<p><a class="button button-smaller" href="#/">button text</a></p>
					<p><a class="button" href="#/">button text</a></p>
					<p><a class="button button-larger" href="#/">button text</a></p>
					<p><a class="button button-largest" href="#/">button text</a></p>
				</div>
				<div class="col-xs-12 col-sm-6">
					<h4>Added <code>button-alt</code> class</h4>
					<p><a class="button button-alt button-smallest" href="#/">button text</a></p>
					<p><a class="button button-alt button-smaller" href="#/">button text</a></p>
					<p><a class="button button-alt" href="#/">button text</a></p>
					<p><a class="button button-alt button-larger" href="#/">button text</a></p>
					<p><a class="button button-alt button-largest" href="#/">button text</a></p>
				</div>
				<div class="col-xs-12 col-sm-6">
					<h4>Added <code>button-white</code> class</h4>
					<p><a class="button button-white button-smallest" href="#/">button text</a></p>
					<p><a class="button button-white button-smaller" href="#/">button text</a></p>
					<p><a class="button button-white" href="#/">button text</a></p>
					<p><a class="button button-white button-larger" href="#/">button text</a></p>
					<p><a class="button button-white button-largest" href="#/">button text</a></p>
				</div>
				<div class="col-xs-12 col-sm-6">
					<h4>Added <code>button-light</code> class</h4>
					<p><a class="button button-light button-smallest" href="#/">button text</a></p>
					<p><a class="button button-light button-smaller" href="#/">button text</a></p>
					<p><a class="button button-light" href="#/">button text</a></p>
					<p><a class="button button-light button-larger" href="#/">button text</a></p>
					<p><a class="button button-light button-largest" href="#/">button text</a></p>
				</div>
				<div class="col-xs-12 col-sm-6">
					<h4>Added <code>button-subtle</code> class</h4>
					<p><a class="button button-subtle button-smallest" href="#/">button text</a></p>
					<p><a class="button button-subtle button-smaller" href="#/">button text</a></p>
					<p><a class="button button-subtle" href="#/">button text</a></p>
					<p><a class="button button-subtle button-larger" href="#/">button text</a></p>
					<p><a class="button button-subtle button-largest" href="#/">button text</a></p>
				</div>
			</div>

			<hr>

			<h3>Further button extensions</h3>
			<div class="row">
				<div class="col-xs-12">
					<h4>Added <code>button-arrowed</code> class</h4>
					<p><a class="button button-arrowed" href="#/">button text</a></p>

					<h5>Extensions to <code>button-arrowed</code></h5>
					<p><a class="button button-arrowed button-arrowed-down" href="#/">button text</a></p>
					<p><a class="button button-arrowed button-arrowed-up" href="#/">button text</a></p>
					<p><a class="button button-arrowed button-arrowed-chevron" href="#/">button text</a></p>

					<h4>Multi-line buttons</h4>
					<p><a class="button button-multiline" href="#/">
						button text sometimes needs <br>
						to go to additional lines
					</a></p>

					<h4>Full width buttons</h4>
					<p><a class="button button-fullwidth" href="#/">button text</a></p>
				</div>
			</div>

		</article>


		<article id="docs-alerts" class="docs-block">
			<h2 class="docs-block--title">Alerts</h2>

			<div class="alert fade in">
				<a class="close" title="Close this alert" data-dismiss="alert" href="#" aria-hidden="true">&times;</a>
				<h3 class="heading">Default alert</h3>
				<p>Just a <code>&lt;div class="alert"&gt;</code>, containing a <code>&lt;h3 class="heading"&gt;</code> and a followup <code>&lt;p&gt;</code>.</p>
			</div>
			<div class="alert fade in alert-warning">
				<a class="close" title="Close this alert" data-dismiss="alert" href="#" aria-hidden="true">&times;</a>
				<h3 class="heading">Warning alert</h3>
				<p>Just a <code>&lt;div class="alert alert-warning"&gt;</code>, containing a <code>&lt;h3 class="heading"&gt;</code> and a followup <code>&lt;p&gt;</code>.</p>
			</div>
			<div class="alert fade in alert-error">
				<a class="close" title="Close this alert" data-dismiss="alert" href="#" aria-hidden="true">&times;</a>
				<h3 class="heading">Error alert</h3>
				<p>Just a <code>&lt;div class="alert alert-error"&gt;</code>, containing a <code>&lt;h3 class="heading"&gt;</code> and a followup <code>&lt;p&gt;</code>.</p>
			</div>
			<div class="alert fade in alert-success">
				<a class="close" title="Close this alert" data-dismiss="alert" href="#" aria-hidden="true">&times;</a>
				<h3 class="heading">Success alert</h3>
				<p>Just a <code>&lt;div class="alert alert-success"&gt;</code>, containing a <code>&lt;h3 class="heading"&gt;</code> and a followup <code>&lt;p&gt;</code>.</p>
			</div>
			<div class="alert fade in alert-info">
				<a class="close" title="Close this alert" data-dismiss="alert" href="#" aria-hidden="true">&times;</a>
				<h3 class="heading">Info alert</h3>
				<p>Just a <code>&lt;div class="alert alert-info"&gt;</code>, containing a <code>&lt;h3 class="heading"&gt;</code> and a followup <code>&lt;p&gt;</code>.</p>
			</div>
		</article>


		<article id="docs-blockquotes" class="docs-block">
			<h2 class="docs-block--title">Sample Blockquote Pattern</h2>

			<figure class="quotation-wrapper">
				<blockquote>
					&ldquo;The world is indeed full of peril, and in it there are many dark places; but still there is much that is fair, and though in all lands love is now mingled with grief, it grows perhaps the greater.&rdquo;
				</blockquote>
				<figcaption class="quotation-citation">
					<div class="citation-name">
						<b>J.R.R. Tolkien</b>,
					</div>
					<div class="citation-more-info">
						<cite>The Two Towers</cite>
					</div>
				</figcaption>
			</figure>

		</article>


		<article id="docs-tables" class="docs-block">
			<h2 class="docs-block--title">Sample Responsive Tables</h2>

			<h3>Basic Responsive Table</h3>

			<div class="responsive-table-wrapper">
				<table>
					<thead>
						<tr>
							<th>Beverage</th>
							<th>Short (8 oz)</th>
							<th>Tall (12 oz)</th>
							<th>Grande (16 oz)</th>
							<th>Venti (20-24 oz)</th>
							<th>Trenta (31oz)</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Brewed Coffee</td>
							<td>180mg</td>
							<td>260mg</td>
							<td>330mg</td>
							<td>415mg</td>
							<td>–</td>
						</tr>
						<tr>
							<td>Brewed Decaf Coffee</td>
							<td>15mg</td>
							<td>20mg</td>
							<td>25mg</td>
							<td>30mg</td>
							<td>–</td>
						</tr>
						<tr>
							<td>Caffè Americano</td>
							<td>75mg</td>
							<td>150mg</td>
							<td>225mg</td>
							<td>300mg</td>
							<td>–</td>
						</tr>
					</tbody>
				</table>
			</div>
		</article>


		<article id="docs-modals" class="docs-block">
			<h2 class="docs-block--title">Sample Modal Patterns</h2>


			<h3>Stock Modal:</h3>

			<!-- Button trigger modal -->
			<a data-toggle="modal" href="#myModal" class="button large">Launch demo modal</a>

			<!-- Modal -->
			<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="button-corner-close" data-dismiss="modal" aria-hidden="true">&times;</button>
							<h4 class="modal-title">Modal title</h4>
						</div>
						<div class="modal-body">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, accusamus, expedita, libero quisquam cupiditate facilis magni blanditiis autem dolorum laudantium nobis aperiam commodi quae voluptas ea eligendi illo mollitia soluta.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, accusamus, expedita, libero quisquam cupiditate facilis magni blanditiis autem dolorum laudantium nobis aperiam commodi quae voluptas ea eligendi illo mollitia soluta.</p>
						</div>
						<div class="modal-footer">
							<button type="button" class="button" data-dismiss="modal">Close</button>
						</div>
					</div><!-- /.modal-content -->
				</div><!-- /.modal-dialog -->
			</div><!-- /.modal -->

			<hr>

			<h3>Email Newsletter "Interstitial" Modal</h3>

			<!-- Button trigger modal -->
			<a data-toggle="modal" href="#newsletter-signup-modal" class="button large">Launch newsletter modal</a>

			<!-- Begin Modal -->
			<div class="modal fade" id="newsletter-signup-modal" tabindex="-1" role="dialog" aria-labelledby="newsletter-signup-modal-label" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="button-corner-close maybe-later" title="Maybe later. Close this for now." data-dismiss="modal" aria-hidden="true">&times;</button>
							<h3 class="modal-title" id="newsletter-signup-modal-label">Don&rsquo;t miss out!</h3>
						</div>
						<div class="modal-body">
							<p>Want to hear about new product inventory and special promotions? Join our email list to receive periodic updates from Perch.</p>
							<div class="email-interstitial-form-wrapper">
								<form class="newsletter-signup-form" method="post" action="http://cl.exct.net/subscribe.aspx">
									<div class="island highlight-island">
										<fieldset class="form-field_block">
											<label for="newsletter-signup-email"><span class="req_symbol" title="This is a required field">*</span>E-mail Address</label>
											<input id="newsletter-signup-email" class="textfield newsletter-signup-email" type="email" name="Email Address">
										</fieldset>
										<fieldset class="form-field_block">
											<label for="newsletter-signup-name">Full Name (Optional)</label>
											<input id="newsletter-signup-name" class="textfield newsletter-signup-name" type="text" name="Full Name">
										</fieldset>

										<!-- ExactTarget: Client ID -->
										<input type="hidden" value="10778321" name="MID">
										<!-- ExactTarget: List ID -->
										<input type="hidden" value="18599086" name="LID">
										<!-- Take user to a thank you page -->
										<input type="hidden" value="<!-- http://www.shopacornercottage.com/pages/thank-you-for-subscribing -->" name="thx">
										<!-- Take user to an error page -->
										<input type="hidden" value="<!-- http://www.shopacornercottage.com/pages/subscription-status -->" name="err">

										<div class="actions-block">
											<input class="button button-success-alt sign-up" type="submit" value="Sign Up Now &raquo;">
										</div>

									</div>

									<fieldset class="modal-actions">
										<div class="actions-block">
											<button type="button" class="button button-subtle maybe-later" data-dismiss="modal">Maybe Later</button>
											<button type="button" class="button button-subtle button-subtle-negative no-thanks" data-dismiss="modal">No Thanks</button>
										</div>
									</fieldset>

									<p class="text-tiny"><em>An <span class="req_symbol">*</span> by the field label means it is required.</em></p>

									<input name="mode" type="hidden" id="cmd" value="process">
								</form>
							</div>
						</div><!-- /.modal-body -->
					</div><!-- /.modal-content -->
				</div><!-- /.modal-dialog -->
			</div><!-- /.modal -->
			<!-- End Modal -->


		</article>


		<?php /*
		<article id="docs-carousels" class="docs-block">
			<h2 class="docs-block--title">Carousels</h2>

<pre><code class="language-javascript">//Javascript
~~~~ DATA ATTRIBUTE OPTIONS: ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
data-autoplay				// autoplay
data-interval="5000"		// time between panel changes when autoplay is used

data-transition="fade"		// fade between panels
data-transition="slide"		// slide between panels
data-transition="flip"		// flip between panels // flip's CSS is commented out from plugins.less
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~ CLASS OPTIONS: ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
nav-arrow-circles			// prev/next navigation = circled arrows
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
</code></pre>
		</article>
		*/ ?>


		<article id="docs-video-embeds" class="docs-block">
			<h2 class="docs-block--title">Video embeds</h2>

			<h3>Default (16:9)</h3>
			<div class="embed-wrapper">
				<iframe width="1280" height="720" src="https://www.youtube.com/embed/RIefj6dOhnM" frameborder="0" allowfullscreen></iframe>
			</div>

			<h3>Ratio: Old Television &amp; Monitors (4:3)</h3>
			<!-- To prevent videos from being full width, an outer wrapper is required. Manually setting width on the .embed-wrapper will ruin its ratio calculation. -->
			<div style="width: 480px; max-width: 100%;">
				<div class="embed__4x3 embed-wrapper">
					<iframe width="480" height="360" src="https://www.youtube.com/embed/rcjeByb1_Lg" frameborder="0" allowfullscreen></iframe>
				</div>
			</div>

			<h3>Ratio: Anamorphic Widescreen (2.39:1)</h3>
			<div class="embed__anamorphic_widescreen embed-wrapper">
				<iframe width="1280" height="720" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>
			</div>
		</article>


		<article id="docs-star-ratings" class="docs-block">
			<h2 class="docs-block--title">Star Ratings</h2>

			<p>Dynamic ("for rating") and static ("just for viewing") samples of HTML/CSS stars for rating.</p>
			<div class="line">
				<div class="col-sm-6">
					<h2 class="heading">For Rating:</h2>
					<div class="product-rating product-rated-0">
						<div class="product-rating-inner-wrapper">
							<a class="star-icon for-rating star-5" href="#rated-5" title="Rate this product 5 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-4" href="#rated-4" title="Rate this product 4 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-3" href="#rated-3" title="Rate this product 3 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-2" href="#rated-2" title="Rate this product 2 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-1" href="#rated-1" title="Rate this product 1 star" tabindex="1">&#9733;</a>
						</div>
					</div>
					<div class="product-rating product-rated-1">
						<div class="product-rating-inner-wrapper">
							<a class="star-icon for-rating star-5" href="#rated-5" title="Rate this product 5 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-4" href="#rated-4" title="Rate this product 4 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-3" href="#rated-3" title="Rate this product 3 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-2" href="#rated-2" title="Rate this product 2 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-1" href="#rated-1" title="Rate this product 1 star" tabindex="1">&#9733;</a>
						</div>
					</div>
					<div class="product-rating product-rated-1-5">
						<div class="product-rating-inner-wrapper">
							<a class="star-icon for-rating star-5" href="#rated-5" title="Rate this product 5 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-4" href="#rated-4" title="Rate this product 4 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-3" href="#rated-3" title="Rate this product 3 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-2" href="#rated-2" title="Rate this product 2 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-1" href="#rated-1" title="Rate this product 1 star" tabindex="1">&#9733;</a>
						</div>
					</div>
					<div class="product-rating product-rated-2">
						<div class="product-rating-inner-wrapper">
							<a class="star-icon for-rating star-5" href="#rated-5" title="Rate this product 5 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-4" href="#rated-4" title="Rate this product 4 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-3" href="#rated-3" title="Rate this product 3 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-2" href="#rated-2" title="Rate this product 2 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-1" href="#rated-1" title="Rate this product 1 star" tabindex="1">&#9733;</a>
						</div>
					</div>
					<div class="product-rating product-rated-2-5">
						<div class="product-rating-inner-wrapper">
							<a class="star-icon for-rating star-5" href="#rated-5" title="Rate this product 5 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-4" href="#rated-4" title="Rate this product 4 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-3" href="#rated-3" title="Rate this product 3 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-2" href="#rated-2" title="Rate this product 2 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-1" href="#rated-1" title="Rate this product 1 star" tabindex="1">&#9733;</a>
						</div>
					</div>
					<div class="product-rating product-rated-3">
						<div class="product-rating-inner-wrapper">
							<a class="star-icon for-rating star-5" href="#rated-5" title="Rate this product 5 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-4" href="#rated-4" title="Rate this product 4 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-3" href="#rated-3" title="Rate this product 3 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-2" href="#rated-2" title="Rate this product 2 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-1" href="#rated-1" title="Rate this product 1 star" tabindex="1">&#9733;</a>
						</div>
					</div>
					<div class="product-rating product-rated-3-5">
						<div class="product-rating-inner-wrapper">
							<a class="star-icon for-rating star-5" href="#rated-5" title="Rate this product 5 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-4" href="#rated-4" title="Rate this product 4 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-3" href="#rated-3" title="Rate this product 3 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-2" href="#rated-2" title="Rate this product 2 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-1" href="#rated-1" title="Rate this product 1 star" tabindex="1">&#9733;</a>
						</div>
					</div>
					<div class="product-rating product-rated-4">
						<div class="product-rating-inner-wrapper">
							<a class="star-icon for-rating star-5" href="#rated-5" title="Rate this product 5 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-4" href="#rated-4" title="Rate this product 4 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-3" href="#rated-3" title="Rate this product 3 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-2" href="#rated-2" title="Rate this product 2 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-1" href="#rated-1" title="Rate this product 1 star" tabindex="1">&#9733;</a>
						</div>
					</div>
					<div class="product-rating product-rated-4-5">
						<div class="product-rating-inner-wrapper">
							<a class="star-icon for-rating star-5" href="#rated-5" title="Rate this product 5 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-4" href="#rated-4" title="Rate this product 4 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-3" href="#rated-3" title="Rate this product 3 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-2" href="#rated-2" title="Rate this product 2 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-1" href="#rated-1" title="Rate this product 1 star" tabindex="1">&#9733;</a>
						</div>
					</div>
					<div class="product-rating product-rated-5">
						<div class="product-rating-inner-wrapper">
							<a class="star-icon for-rating star-5" href="#rated-5" title="Rate this product 5 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-4" href="#rated-4" title="Rate this product 4 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-3" href="#rated-3" title="Rate this product 3 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-2" href="#rated-2" title="Rate this product 2 stars" tabindex="1">&#9733;</a>
							<a class="star-icon for-rating star-1" href="#rated-1" title="Rate this product 1 star" tabindex="1">&#9733;</a>
						</div>
					</div>
				</div>
				<div class="col-sm-6">
					<h2 class="heading">Just for viewing</h2>
					<div class="product-rating product-rated-0" title="Rating: Not rated yet">
						<div class="product-rating-inner-wrapper">
							<span class="star-icon star-5">&#9733;</span>
							<span class="star-icon star-4">&#9733;</span>
							<span class="star-icon star-3">&#9733;</span>
							<span class="star-icon star-2">&#9733;</span>
							<span class="star-icon star-1">&#9733;</span>
						</div>
					</div>
					<div class="product-rating product-rated-1" title="Rating: 1 out of 5">
						<div class="product-rating-inner-wrapper">
							<span class="star-icon star-5">&#9733;</span>
							<span class="star-icon star-4">&#9733;</span>
							<span class="star-icon star-3">&#9733;</span>
							<span class="star-icon star-2">&#9733;</span>
							<span class="star-icon star-1">&#9733;</span>
						</div>
					</div>
					<div class="product-rating product-rated-1-5" title="Rating: 1.5 out of 5">
						<div class="product-rating-inner-wrapper">
							<span class="star-icon star-5">&#9733;</span>
							<span class="star-icon star-4">&#9733;</span>
							<span class="star-icon star-3">&#9733;</span>
							<span class="star-icon star-2">&#9733;</span>
							<span class="star-icon star-1">&#9733;</span>
						</div>
					</div>
					<div class="product-rating product-rated-2" title="Rating: 2 out of 5">
						<div class="product-rating-inner-wrapper">
							<span class="star-icon star-5">&#9733;</span>
							<span class="star-icon star-4">&#9733;</span>
							<span class="star-icon star-3">&#9733;</span>
							<span class="star-icon star-2">&#9733;</span>
							<span class="star-icon star-1">&#9733;</span>
						</div>
					</div>
					<div class="product-rating product-rated-2-5" title="Rating: 2.5 out of 5">
						<div class="product-rating-inner-wrapper">
							<span class="star-icon star-5">&#9733;</span>
							<span class="star-icon star-4">&#9733;</span>
							<span class="star-icon star-3">&#9733;</span>
							<span class="star-icon star-2">&#9733;</span>
							<span class="star-icon star-1">&#9733;</span>
						</div>
					</div>
					<div class="product-rating product-rated-3" title="Rating: 3 out of 5">
						<div class="product-rating-inner-wrapper">
							<span class="star-icon star-5">&#9733;</span>
							<span class="star-icon star-4">&#9733;</span>
							<span class="star-icon star-3">&#9733;</span>
							<span class="star-icon star-2">&#9733;</span>
							<span class="star-icon star-1">&#9733;</span>
						</div>
					</div>
					<div class="product-rating product-rated-3-5" title="Rating: 3.5 out of 5">
						<div class="product-rating-inner-wrapper">
							<span class="star-icon star-5">&#9733;</span>
							<span class="star-icon star-4">&#9733;</span>
							<span class="star-icon star-3">&#9733;</span>
							<span class="star-icon star-2">&#9733;</span>
							<span class="star-icon star-1">&#9733;</span>
						</div>
					</div>
					<div class="product-rating product-rated-4" title="Rating: 4 out of 5">
						<div class="product-rating-inner-wrapper">
							<span class="star-icon star-5">&#9733;</span>
							<span class="star-icon star-4">&#9733;</span>
							<span class="star-icon star-3">&#9733;</span>
							<span class="star-icon star-2">&#9733;</span>
							<span class="star-icon star-1">&#9733;</span>
						</div>
					</div>
					<div class="product-rating product-rated-4-5" title="Rating: 4.5 out of 5">
						<div class="product-rating-inner-wrapper">
							<span class="star-icon star-5">&#9733;</span>
							<span class="star-icon star-4">&#9733;</span>
							<span class="star-icon star-3">&#9733;</span>
							<span class="star-icon star-2">&#9733;</span>
							<span class="star-icon star-1">&#9733;</span>
						</div>
					</div>
					<div class="product-rating product-rated-5" title="Rating: 5 out of 5">
						<div class="product-rating-inner-wrapper">
							<span class="star-icon star-5">&#9733;</span>
							<span class="star-icon star-4">&#9733;</span>
							<span class="star-icon star-3">&#9733;</span>
							<span class="star-icon star-2">&#9733;</span>
							<span class="star-icon star-1">&#9733;</span>
						</div>
					</div>
				</div>
			</div>
			<br>

			<div class="alert">
				<h3 class="heading">Advantages of this method vs. image-based solution</h3>
				<ul>
					<li>Retina ready: &#9733; character is an HTML entity</li>
					<li>Color customizable via CSS <code>color</code></li>
					<li>Size customizable via CSS <code>font-size</code></li>
					<li>No images = smaller size + no extra HTTP requests</li>
				</ul>
			</div>
		</article>


	</section>

</div>

</div><!-- end Main Content's .container -->


<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ begin footer -->
<?php get_footer(); ?>
