"""
Professor Jacksons Compliment generator - Data and Logic
Contains all compliment data structures (lists/dictionaries) and generation functions.
"""

import random


# Lists of adjectives for each style
funny_adjectives = ["ridiculously", "hilariously", "suspiciously", "absurdly", 
                   "comically", "laughably", "jokingly", "wittily"]
sweet_adjectives = ["genuinely", "incredibly", "wonderfully", "beautifully", 
                   "lovingly", "sweetly", "tenderly", "gracefully"]
hype_adjectives = ["absolutely", "insanely", "legendarily", "phenomenally", 
                  "epically", "mind-blowingly", "unstoppably", "incredibly"]


# Lists of nouns for each style
funny_nouns = ["awesome", "cool", "amazing", "brilliant", "talented", "perfect", 
              "comedian", "legend", "rockstar", "genius", "champion", "superstar"]
sweet_nouns = ["kind", "gentle", "warm", "caring", "thoughtful", "beautiful", 
              "angel", "treasure", "blessing", "sunshine", "gem", "heart"]
hype_nouns = ["legendary", "powerful", "amazing", "awesome", "brilliant", "cool", 
             "champion", "warrior", "hero", "legend", "boss", "icon"]


# Dictionary of compliment templates for each style
templates = {
    "funny": [
        "{name} is {adj} {noun} and everyone knows it!",
        "{name}, you're so {adj} {noun} that even comedians take notes!",
        "{name}, your sense of humor could power a small city!",
        "{name}, you're the human equivalent of a perfect meme!",
        "{name}, you're so {adj} {noun} that I'm convinced you're secretly a superhero!",
        "{name} is {adj} {noun} - no questions asked!"
    ],
    "sweet": [
        "{name}, you have the most {adj} {noun}.",
        "{name}, your kindness lights up the world around you!",
        "{name}, you have a heart of gold and a spirit that shines!",
        "{name}, you make the world a better place just by being in it!",
        "{name}, your gentle soul is a gift to everyone who knows you!",
        "{name} is {adj} {noun} and the world is lucky to have you."
    ],
    "hype": [
        "{name} is {adj} {noun}! No cap!",
        "{name}, you're absolutely CRUSHING it! 🔥",
        "{name}, you're a total BOSS and nothing can stop you!",
        "{name}, you're on FIRE and the world better watch out!",
        "{name}, you're absolutely UNSTOPPABLE and I'm here for it! 💪",
        "{name} is {adj} {noun} and nothing can change that!"
    ]
}


def get_random_item(items):
    """Returns a random item from a list"""
    return random.choice(items)


def get_adjective(style):
    """Returns random adjective for given style"""
    if style == "funny":
        return get_random_item(funny_adjectives)
    elif style == "sweet":
        return get_random_item(sweet_adjectives)
    elif style == "hype":
        return get_random_item(hype_adjectives)
    else:
        return get_random_item(funny_adjectives)  # Default fallback


def get_noun(style):
    """Returns random noun for given style"""
    if style == "funny":
        return get_random_item(funny_nouns)
    elif style == "sweet":
        return get_random_item(sweet_nouns)
    elif style == "hype":
        return get_random_item(hype_nouns)
    else:
        return get_random_item(funny_nouns)  # Default fallback


def get_template(style):
    """Returns random template for given style"""
    if style in templates:
        return get_random_item(templates[style])
    else:
        return get_random_item(templates["funny"])  # Default fallback


def generate_compliment(name, style):
    """Creates a random compliment based on inputs"""
    # Get random components
    adjective = get_adjective(style)
    noun = get_noun(style)
    template = get_template(style)
    
    # Loop through template to replace all placeholders
    compliment = template
    replacements = {
        '{name}': name,
        '{adj}': adjective,
        '{noun}': noun
    }
    
    # Loop through each placeholder and replace it
    for placeholder, value in replacements.items():
        compliment = compliment.replace(placeholder, value)
    
    return compliment

