---
layout: layouts/post.njk
title: Contact Information
templateClass: tmpl-post
eleventyNavigation:
  key: Contact
  order: 9
---

<div class="container">
  <div class="text-center">
    <div class="row">
      <div class="col-md-6">
        <h2>Jesper Spångberg</h2><br>
        <h3>Email Address</h3>
        <h4>Jesper.spangberg@gmail.com</h4>
        <h3>Phone Number</h3>
        <h4>+447394198149</h4>
        <h4>+46733894262</h4>
      </div>
    </div>
  </div>
</div>
<div class="container">
  <div class="text-center">
    <div class="col-md-6">
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
</side>