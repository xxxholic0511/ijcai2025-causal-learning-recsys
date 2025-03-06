---
layout: default
title: Home
---

<div class="hero-section">
    <div class="container">
        <div class="hero-content">
            <h1>Causal Learning for Recommendation Systems</h1>
            <p class="lead">A Workshop at IJCAI 2025</p>
            <p>Montreal, Canada | August 16th, 2025</p>
            <a href="{{ site.baseurl }}/submission" class="btn btn-primary">Submit Your Paper</a>
        </div>
    </div>
</div>

<div class="container mt-5">
    <div class="row">
        <div class="col-lg-8 mx-auto">
            <div class="card mb-4">
                <div class="card-body">
                    <h2 class="card-title">About the Workshop</h2>
                    <p class="lead">Exploring the intersection of causal inference and recommendation systems to build more robust, fair, and interpretable recommendation models.</p>
                    <p>This workshop brings together researchers and practitioners to discuss the latest advances in causal learning for recommendation systems, focusing on both theoretical foundations and practical applications.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="row mb-5">
        <div class="col-12">
            <h2 class="text-center mb-4">Key Topics</h2>
        </div>
        <div class="col-lg-4 mb-4">
            <div class="card h-100">
                <div class="card-body">
                    <h3 class="card-title">Causal Inference</h3>
                    <ul class="list-unstyled">
                        <li>Integrating causal models</li>
                        <li>Cause-effect relationships</li>
                        <li>Causal discovery techniques</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-lg-4 mb-4">
            <div class="card h-100">
                <div class="card-body">
                    <h3 class="card-title">Bias and Fairness</h3>
                    <ul class="list-unstyled">
                        <li>Identifying biases</li>
                        <li>Fairness-aware models</li>
                        <li>Counterfactual evaluation</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-lg-4 mb-4">
            <div class="card h-100">
                <div class="card-body">
                    <h3 class="card-title">Interpretability</h3>
                    <ul class="list-unstyled">
                        <li>Causal explanations</li>
                        <li>User-item interactions</li>
                        <li>Interpretable models</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-lg-4 mb-4">
            <div class="card h-100">
                <div class="card-body">
                    <h3 class="card-title">Counterfactual Learning</h3>
                    <ul class="list-unstyled">
                        <li>Effectiveness evaluation</li>
                        <li>Personalized counterfactuals</li>
                        <li>Impact measurement</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-lg-4 mb-4">
            <div class="card h-100">
                <div class="card-body">
                    <h3 class="card-title">Causal Reinforcement Learning</h3>
                    <ul class="list-unstyled">
                        <li>Personalized recommendations</li>
                        <li>Adaptive strategies</li>
                        <li>Dynamic systems</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-lg-4 mb-4">
            <div class="card h-100">
                <div class="card-body">
                    <h3 class="card-title">Applications</h3>
                    <ul class="list-unstyled">
                        <li>Real-world applications</li>
                        <li>Case studies</li>
                        <li>Industry lessons</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-8 mx-auto">
            <div class="card mb-4">
                <div class="card-body">
                    <h2 class="card-title">Workshop Organizers</h2>
                    <p class="lead">Organizers will be announced soon.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-8 mx-auto">
            <div class="card mb-4">
                <div class="card-body">
                    <h2 class="card-title">Important Dates</h2>
                    <ul class="list-unstyled">
                        <li><i class="fas fa-calendar-alt me-2"></i> Paper Submission: May 9, 2025</li>
                        <li><i class="fas fa-bell me-2"></i> Notification: June 6, 2025</li>
                        <li><i class="fas fa-file-alt me-2"></i> Camera Ready: June 20, 2025</li>
                        <li><i class="fas fa-users me-2"></i> Workshop Date: August 16th, 2025</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.hero-section {
    position: relative;
    min-height: 80vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 4rem 0;
}

.hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6));
}

.hero-content {
    position: relative;
    z-index: 2;
    color: white;
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
}

.hero-content h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-content .lead {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.hero-content .btn-primary {
    font-size: 1.1rem;
    padding: 0.8rem 2rem;
    border-radius: 50px;
    text-transform: uppercase;
    letter-spacing: 1px;
    background: var(--primary-color);
    border: 2px solid var(--primary-color);
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.hero-content .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    background: transparent;
    border-color: white;
}

@media (max-width: 768px) {
    .hero-content h1 {
        font-size: 2.5rem;
    }

    .hero-content .lead {
        font-size: 1.4rem;
    }

    .hero-content p {
        font-size: 1.1rem;
    }
}

.card {
    border: none;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
}

.card-title {
    color: var(--primary-color);
    font-weight: 600;
    margin-bottom: 1rem;
}

.card-body ul li {
    margin-bottom: 0.5rem;
    color: var(--text-color);
}

.card-body ul li:before {
    content: '•';
    color: var(--secondary-color);
    margin-right: 0.5rem;
}

.lead {
    font-size: 1.25rem;
    color: var(--text-color);
}
</style> 