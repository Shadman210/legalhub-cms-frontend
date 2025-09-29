"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ChevronDown, MapPin, Search } from "lucide-react";
import { useEffect, useState } from "react";

const moroccanCities = [
  "Tout le Maroc",
  "Casablanca",
  "Rabat",
  "Marrakech",
  "Fès",
  "Tanger",
  "Agadir",
  "Meknès",
  "Oujda",
  "Kenitra",
  "Tétouan",
  "Safi",
  "Mohammedia",
  "Khouribga",
  "Beni Mellal",
  "El Jadida",
  "Nador",
  "Taza",
  "Settat",
  "Larache",
];

const searchSuggestions = [
  "Avocat droit de la famille",
  "Avocat droit commercial",
  "Avocat droit pénal",
  "Avocat droit immobilier",
  "Huissier de justice",
  "Consultation juridique",
  "Rédaction contrat",
  "Divorce",
  "Succession",
  "Création entreprise",
  "Contentieux commercial",
  "Droit du travail",
];

interface SearchBarProps {
  onSearch?: (query: string, location: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Tout le Maroc");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = searchSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery, selectedLocation);
    }
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Card className="p-6 shadow-lg border-0 bg-white/95 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Input */}
          <div className="flex-1 relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Rechercher un avocat, huissier ou service juridique..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pl-10 h-12 text-base"
                onFocus={() =>
                  searchQuery.length > 0 && setShowSuggestions(true)
                }
              />
            </div>

            {/* Search Suggestions */}
            {showSuggestions && filteredSuggestions.length > 0 && (
              <Card className="absolute top-full left-0 right-0 mt-2 z-50 max-h-60 overflow-y-auto">
                {filteredSuggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="p-3 hover:bg-muted cursor-pointer border-b last:border-b-0"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    <div className="flex items-center gap-2">
                      <Search className="h-4 w-4 text-muted-foreground" />
                      <span>{suggestion}</span>
                    </div>
                  </div>
                ))}
              </Card>
            )}
          </div>

          {/* Location Dropdown */}
          <div className="md:w-64">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full h-12 justify-between bg-transparent"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{selectedLocation}</span>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 max-h-60 overflow-y-auto">
                {moroccanCities.map((city) => (
                  <DropdownMenuItem
                    key={city}
                    onClick={() => setSelectedLocation(city)}
                    className={selectedLocation === city ? "bg-muted" : ""}
                  >
                    {city}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Search Button */}
          <Button onClick={handleSearch} size="lg" className="h-12 px-8">
            <Search className="h-4 w-4 mr-2" />
            Rechercher
          </Button>
        </div>
      </Card>
    </div>
  );
}
