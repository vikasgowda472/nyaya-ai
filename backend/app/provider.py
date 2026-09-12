from dataclasses import dataclass

from .models import Provision


@dataclass(frozen=True)
class ProviderResult:
    text: str
    provider: str


class ProviderAdapter:
    """Boundary for hosted providers. No provider is enabled by default."""

    def generate(self, query: str, passages: list[Provision], language: str) -> ProviderResult | None:
        # Add provider clients here only after their output is schema-validated and evaluated.
        # The caller must supply only approved passages, never the full corpus.
        return None
