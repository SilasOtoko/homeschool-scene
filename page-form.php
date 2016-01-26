<!--
Template name: Form
-->
<?php get_header(); ?>
<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ end header -->


<!-- Main content's .container -->
<div class="main-content-container container">

<div id="content" class="row">

	<!-- <aside class="main-sidebar col-md-3" role="complementary">
		<?php // get_sidebar(); ?>
	</aside> -->

	<section class="main-content-column col-md-9">
		<?php the_post(); ?>
		<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
			<h1 class="entry-title"><?php the_title(); ?></h1>
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

		<!-- Begin Form -->
		<!-- Uses Parsely.js for inline form validation. http://parsleyjs.org/documentation.html -->
		<form id="contact_form" name="form1" method="post" action="" data-validate="parsley" role="form">
			<div class="form-columned self-gutter form-thinner">

				<p>An <span class="req_symbol">*</span> by the field label means it is required.</p>

				<div class="form-row row">
					<div class="form-column col-xs-12 col-sm-6">
						<div class="form-field-block">
							<label for="first_name"><span class="req_symbol">*</span> First Name:</label>
							<input class="input-field" id="first_name" type="text" name="first_name" value="<?= $_POST['first_name'] ?>" required aria-required="true" data-trigger="change" autofocus >
						</div>
					</div>
					<div class="form-column col-xs-12 col-sm-6">
						<div class="form-field-block">
							<label for="last_name"><span class="req_symbol">*</span> Last Name:</label>
							<input class="input-field" id="last_name" type="text" name="last_name" value="<?= $_POST['last_name'] ?>" required aria-required="true" data-trigger="change" >
						</div>
					</div>
				</div>

				<div class="form-row row">
					<div class="form-field-block">
						<div class="form-column col-xs-12 col-sm-6">
							<label for="email"><span class="req_symbol">*</span> Email:</label>
							<input class="input-field" id="email" type="email" name="email" value="<?= $_POST['email'] ?>" placeholder="address@domain.com" required aria-required="true" data-trigger="change" >
						</div>
					</div>
					<div class="form-field-block">
						<div class="form-column col-xs-12 col-sm-6">
							<label for="address">Address:</label>
							<input class="input-field" id="address" type="text" name="address" value="<?= $_POST['address'] ?>">
						</div>
					</div>
				</div>

				<div class="form-row row">
					<div class="form-column col-xs-12 col-sm-6">
						<div class="form-field-block">
							<label for="city">City:</label>
							<input class="input-field" id="city" type="text" name="city" value="<?= $_POST['city'] ?>">
						</div>
					</div>
					<div class="form-column col-xs-12 col-sm-6">
						<div class="form-field-block">
							<label for="state">State:</label>
							<select class="chosen-select" data-placeholder="Choose a state..." id="state" name="state" style="width:300px;">
								<option value="" selected="selected">Select a State</option>
		<?php
		$state_list = array('AL'=>"Alabama",  'AK'=>"Alaska",  'AZ'=>"Arizona",  'AR'=>"Arkansas",  'CA'=>"California",  'CO'=>"Colorado",  'CT'=>"Connecticut",  'DE'=>"Delaware",  'DC'=>"District Of Columbia",  'FL'=>"Florida",  'GA'=>"Georgia",  'HI'=>"Hawaii",  'ID'=>"Idaho",  'IL'=>"Illinois",  'IN'=>"Indiana",  'IA'=>"Iowa",  'KS'=>"Kansas",  'KY'=>"Kentucky",  'LA'=>"Louisiana",  'ME'=>"Maine",  'MD'=>"Maryland",  'MA'=>"Massachusetts",  'MI'=>"Michigan",  'MN'=>"Minnesota",  'MS'=>"Mississippi",  'MO'=>"Missouri",  'MT'=>"Montana", 'NE'=>"Nebraska", 'NV'=>"Nevada", 'NH'=>"New Hampshire", 'NJ'=>"New Jersey", 'NM'=>"New Mexico", 'NY'=>"New York", 'NC'=>"North Carolina", 'ND'=>"North Dakota", 'OH'=>"Ohio",  'OK'=>"Oklahoma",  'OR'=>"Oregon",  'PA'=>"Pennsylvania",  'RI'=>"Rhode Island",  'SC'=>"South Carolina",  'SD'=>"South Dakota", 'TN'=>"Tennessee",  'TX'=>"Texas",  'UT'=>"Utah",  'VT'=>"Vermont",  'VA'=>"Virginia",  'WA'=>"Washington",  'WV'=>"West Virginia",  'WI'=>"Wisconsin",  'WY'=>"Wyoming");

		foreach($state_list as $state_abbr => $state_name){
		echo "\n\t\t\t\t", '<option value="', $state_abbr, '"', (($_POST['state'] == $state_abbr) ? ' selected="selected"' : ''),'>', $state_name, '</option>';
		}
		?>
							</select>
						</div>
					</div>
				</div>

				<div class="form-row row">
					<div class="form-column col-xs-12 col-sm-6">
						<div class="form-field-block">
							<label for="zip_code">Zip Code:</label>
							<input class="input-field" id="zip_code" type="text" name="zip_code" value="<?= $_POST['zip_code'] ?>" style="width:200px;">
						</div>
					</div>
					<div class="form-column col-xs-12 col-sm-6">
						<div class="form-field-block">
							<label for="phone_number">Phone Number:</label>
							<input class="input-field" id="phone_number" type="tel" name="phone_number" value="<?= $_POST['phone_number'] ?>" placeholder="555-555-5555" data-type="phone" data-trigger="change" aria-describedby="tel-format tel-note">
							<!-- These two further "describe" the above field, so an `aria-describedby="foo"` attribute links to their IDs -->
							<p class="input-note">
								<span id="tel-format">(555-555-5555)</span>
								<br>
								 <span id="tel-note">Additional secondary note</span>
							</p>
						</div>
					</div>
				</div>

				<hr>

				<div class="form-row row">
					<div class="form-column col-xs-12">
						<div class="form-field-block">
							<label for="message"><span class="req_symbol">*</span> Message (limit to 400 characters)</label>
							<textarea class="input-field" id="message" name="message" rows="5" required aria-required="true" data-trigger="change" data-maxlength="400" ><?= $_POST['message'] ?></textarea>
						</div>
					</div>
				</div>

				<hr>

				<div class="form-row row">
					<div class="form-column col-xs-12">
						<fieldset class="form-field-block">
							<legend>What are your favorite colors?</legend>
							<label class="wrapping-label" for="favorite-color-red">
								<input id="favorite-color-red" type="checkbox">
								<div class="label-contents">
									Red
								</div>
							</label>
							<label class="wrapping-label" for="favorite-color-orange">
								<input id="favorite-color-orange" type="checkbox">
								<div class="label-contents">
									Orange
								</div>
							</label>
							<label class="wrapping-label" for="favorite-color-yellow">
								<input id="favorite-color-yellow" type="checkbox">
								<div class="label-contents">
									Yellow
								</div>
							</label>
							<label class="wrapping-label" for="favorite-color-green">
								<input id="favorite-color-green" type="checkbox">
								<div class="label-contents">
									Green
								</div>
							</label>
							<label class="wrapping-label" for="favorite-color-blue-no-green">
								<input id="favorite-color-blue-no-green" type="checkbox">
								<div class="label-contents">
									Blue
								</div>
							</label>
						</fieldset>
					</div>
				</div>

				<hr>

				<div class="form-row row">
					<div class="form-column col-xs-12 col-sm-6">
						<div class="form-field-block">
							<label for="captcha">
								<span class="req_symbol">*</span> Please enter the letters you see in the image below:
								<br>
								<img src="http://captcha.rarebirdinc.com/<?php echo $captcha['secure']; ?>.jpg" width="<?php echo $captcha['width']; ?>" height="<?php echo $captcha['height']; ?>" alt="" />
								<br>
							</label>
							<input class="input-field" id="captcha" type="text" name="image_verification" value="" size="35" maxlength="60" required aria-required="true" >
						</div>
					</div>
				</div>

				<input type="hidden" name="action" value="process">
				<input class="button largest" id="contact_submit" type="submit" value="Submit &raquo;">

			</div>
		</form>
		<!-- End Form -->

	</section>

</div>

</div><!-- end Main Content's .container -->


<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ begin footer -->
<?php get_footer(); ?>
