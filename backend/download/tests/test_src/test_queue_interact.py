"""tests for download queue interact query building"""

from datetime import date

from download.src.queue_interact import build_published_range


def test_no_bounds_returns_none():
    assert build_published_range() is None
    assert build_published_range(None, None) is None


def test_lower_bound_only():
    result = build_published_range(published_gte=date(2024, 2, 1))
    assert result == {"published": {"gte": "2024-02-01"}}


def test_upper_bound_only():
    result = build_published_range(published_lte=date(2024, 2, 28))
    assert result == {"published": {"lte": "2024-02-28T23:59:59"}}


def test_both_bounds():
    result = build_published_range(
        published_gte=date(2024, 2, 1), published_lte=date(2024, 2, 28)
    )
    assert result == {
        "published": {
            "gte": "2024-02-01",
            "lte": "2024-02-28T23:59:59",
        }
    }
