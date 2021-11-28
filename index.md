---
layout: default
description: We are Sheep Studios, an indie game development company. We offer high quality games for licensing as well as HTMl5 game publishing.
title: Home
---

<!-- Fullscreen hero section start -->
<section id="hero" class="d-flex flex-column justify-content-center align-items-center">
    <div class="container text-center text-md-left" data-aos="fade-up">
        <h1>👋 Hey, We're Sheep Studios.</h1>

        <h2>For three years, we've been making games for the world to enjoy.</h2>

        <a href="#portfolio" class="btn-get-started scrollto">Our Games</a>
    </div>
</section>
<!-- End hero section -->

<!-- Main content start -->
<main id="main">
    {% include our-games.html %}

    <!-- Contact section start -->
    <section id="contact" class="contact">
        <div class="container">
            <div class="section-title" data-aos="fade-up">
                <h2>Contact</h2>
                <p> Need to get in touch? Let's talk! Fill out the form below and we'll get back to you ASAP.</p>
            </div>

            <div class="row mt-5 justify-content-center" data-aos="fade-up">
                <div class="col-lg-10">
                    <form action="https://usebasin.com/f/d2e06735cbf3" method="post" role="form" class="php-email-form">
                        <!-- Top row -->
                        <div class="form-row">
                            <!-- Name -->
                            <div class="col-md-6 form-group">
                                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div class="validate"></div>
                            </div>

                            <!-- Email -->
                            <div class="col-md-6 form-group">
                                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div class="validate"></div>
                            </div>
                        </div>

                        <!-- Subject -->
                        <div class="form-group">
                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                            <div class="validate"></div>
                        </div>

                        <!-- Message -->
                        <div class="form-group">
                            <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                            <div class="validate"></div>
                        </div>

                        <!-- Send -->
                        <div class="mb-3">
                            <div class="loading">Loading</div>
                            <div class="error-message"></div>
                            <div class="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div class="text-center"><button type="submit">Send Message</button></div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!-- End Contact Section -->
</main>
<!-- End #main -->
