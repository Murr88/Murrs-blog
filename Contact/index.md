---
layout: layouts/post.njk
title: Contact Information
templateClass: tmpl-post
eleventyNavigation:
  key: Contact
  order: 9
---
<div class="container-main">
  <div class="col-md-6">
    <div class="row">
      <div class="container-main">
      <h2>Jesper Spångberg</h2><br>
      <h4>Email Address</h4>
      <p>Jesper.spangberg@gmail.com </p>
      <h4>Phone Number</h4>
      <p>+447394198149</p>
      <p>+46733894262</p>
      </div>
    </div>
  </div>

  <div class="col-md-6">
    <div class="row">
      <div class="container-main">
      <h3>Please contact me if you need anything.</h3>
      <form name="contact" method="POST" data-netlify="true">
        <p><label>Your Name: <input type="text" name="name" /></label></p>
        <p><label>Your Email: <input type="email" name="email" /></label></p>
        <p><label>Your Role: <select name="role[]" multiple>
        <option value="leader">Leader</option>
        <option value="follower">Follower</option>
        </select></label></p>
        <p><label>Message: <textarea name="message"></textarea></label></p>
        <p><input type="checkbox" id="terms and conditions" name="terms and conditions" value="terms">
        <label for="Terms and Conditions">Accept Terms and Conditions?</label><br></p>
        <p><button type="submit">Send</button></p>
      </form>
      </div>
    </div>
  </div>
</div>
</side>